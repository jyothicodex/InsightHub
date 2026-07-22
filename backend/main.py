from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import os
import shutil
import sqlite3
import datetime
from dotenv import load_dotenv

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import SystemMessage, HumanMessage
from langchain_community.document_loaders import PyPDFLoader, TextLoader

app = FastAPI(title="Industrial Knowledge Intelligence API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    document_id: int = None

load_dotenv()

# Setup SQLite Database and Uploads Directory
DB_FILE = "database.sqlite"
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS documents (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            category TEXT,
            size TEXT,
            date TEXT,
            status TEXT,
            filepath TEXT,
            extracted_text TEXT
        )
    ''')
    conn.commit()
    conn.close()

init_db()

@app.get("/")
def read_root():
    return {"status": "Backend is running!", "message": "Welcome to the API"}

@app.get("/api/documents")
def get_documents():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, category, size, date, status, filepath FROM documents ORDER BY id DESC")
    rows = cursor.fetchall()
    conn.close()
    
    docs = []
    for row in rows:
        docs.append({
            "id": row[0],
            "name": row[1],
            "category": row[2],
            "size": row[3],
            "date": row[4],
            "status": row[5],
            "filepath": row[6]
        })
    return {"documents": docs}

from fastapi.responses import FileResponse
from fastapi import HTTPException

@app.delete("/api/documents/{document_id}")
def delete_document(document_id: int):
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute("SELECT filepath FROM documents WHERE id = ?", (document_id,))
    row = cursor.fetchone()
    if not row:
        conn.close()
        raise HTTPException(status_code=404, detail="Document not found")
    
    filepath = row[0]
    cursor.execute("DELETE FROM documents WHERE id = ?", (document_id,))
    conn.commit()
    conn.close()
    
    if os.path.exists(filepath):
        os.remove(filepath)
        
    return {"status": "Success", "message": "Document deleted successfully"}

@app.get("/api/documents/{document_id}/download")
def download_document(document_id: int):
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute("SELECT filepath, name FROM documents WHERE id = ?", (document_id,))
    row = cursor.fetchone()
    conn.close()
    if not row:
        raise HTTPException(status_code=404, detail="Document not found")
    
    filepath, name = row[0], row[1]
    if not os.path.exists(filepath):
        raise HTTPException(status_code=404, detail="File missing on disk")
        
    return FileResponse(path=filepath, filename=name)

@app.post("/api/chat")
def chat_with_agent(request: ChatRequest):
    try:
        api_key = os.environ.get("GOOGLE_API_KEY")
        if not api_key or api_key == "your_api_key_here":
            return {"reply": "Error: GOOGLE_API_KEY is not set. Please add it to the backend .env file."}

        llm = ChatGoogleGenerativeAI(
            model="gemini-2.5-flash",
            temperature=0.3,
            max_tokens=None,
            timeout=None,
            max_retries=2,
        )
        
        system_prompt = "You are the InsightHub Industrial AI Assistant. You help engineers and technicians understand maintenance manuals, inspection reports, and safety guidelines. Keep answers concise, professional, and helpful."
        
        # Get the specific document's text from SQLite
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        
        if request.document_id:
            cursor.execute("SELECT extracted_text FROM documents WHERE id = ?", (request.document_id,))
        else:
            cursor.execute("SELECT extracted_text FROM documents ORDER BY id DESC LIMIT 1")
            
        row = cursor.fetchone()
        conn.close()
        
        if row and row[0]:
            system_prompt += f"\n\nHere is the context from the latest uploaded document to help you answer:\n\n{row[0]}"

        messages = [
            SystemMessage(content=system_prompt),
            HumanMessage(content=request.message)
        ]
        
        ai_response = llm.invoke(messages)
        return {"reply": ai_response.content}

    except Exception as e:
        print(f"Error during AI invocation: {e}")
        return {"reply": f"Sorry, I encountered an error: {str(e)}"}

@app.post("/api/upload")
async def upload_document(file: UploadFile = File(...)):
    try:
        file_path = f"{UPLOAD_DIR}/{file.filename}"
        
        # Save physical file to uploads directory
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        # Load the document to extract text
        if file.filename.endswith(".pdf"):
            loader = PyPDFLoader(file_path)
        else:
            loader = TextLoader(file_path)
            
        docs = loader.load()
        new_text = "\n\n".join([doc.page_content for doc in docs])
        
        # Get file size in MB
        file_size_bytes = os.path.getsize(file_path)
        size_mb = f"{file_size_bytes / (1024 * 1024):.1f} MB"
        
        # Save to SQLite
        date_str = datetime.datetime.now().strftime("%Y-%m-%d")
        
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO documents (name, category, size, date, status, filepath, extracted_text)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (file.filename, "Uploaded", size_mb, date_str, "Indexed", file_path, new_text))
        conn.commit()
        conn.close()

        return {
            "filename": file.filename, 
            "status": "Success",
            "message": f"Document processed and saved to database successfully!"
        }
    except Exception as e:
        print(f"Upload error: {e}")
        return {"status": "Error", "message": str(e)}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
