# 🏭 InsightHub: Industrial Knowledge Intelligence

![InsightHub](https://img.shields.io/badge/AI--Powered-Knowledge%20Retrieval-blue?style=for-the-badge) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Gemini](https://img.shields.io/badge/Gemini_2.5-8E75B2?style=for-the-badge&logo=google&logoColor=white)

InsightHub is an advanced, full-stack AI assistant designed specifically for industrial environments. It empowers engineers and technicians to instantly query and understand complex maintenance manuals, inspection reports, and safety guidelines using Retrieval-Augmented Generation (RAG).

## ✨ Features

- 📄 **Document Ingestion**: Upload industrial documents (PDF, TXT) and have them automatically parsed and indexed.
- 🤖 **Context-Aware AI Chat**: Ask questions about your documents and get precise, professional answers powered by Google's Gemini 2.5 Flash LLM.
- 🗄️ **Local SQLite Storage**: Fast, lightweight local database for tracking documents, file metadata, and extracted text.
- ⚡ **Modern UI**: A beautifully crafted, responsive React frontend powered by Vite and Tailwind CSS.
- 🚀 **High-Performance API**: A lightning-fast FastAPI backend handling concurrent uploads and LLM inference.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **HTTP Client**: Axios

### Backend
- **Framework**: FastAPI + Uvicorn
- **AI/LLM Engine**: LangChain + Google Generative AI
- **Document Processing**: PyPDFLoader, TextLoader
- **Database**: SQLite3

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v18+ recommended)
- [Python](https://www.python.org/) (v3.10+ recommended)
- A [Google Gemini API Key](https://aistudio.google.com/)

### 1. Backend Setup

Open a terminal and navigate to the `backend` directory:

```bash
cd backend
```

Create a virtual environment (optional but recommended):
```bash
python -m venv venv
# On Windows
venv\Scripts\activate
# On Mac/Linux
source venv/bin/activate
```

Install the required Python packages:
```bash
pip install -r requirements.txt
```

Set up your Environment Variables:
Create a `.env` file in the `backend` directory and add your Google API key:
```env
GOOGLE_API_KEY="your_actual_api_key_here"
```

Start the FastAPI server:
```bash
python main.py
```
> The API will be running at `http://localhost:8000`. You can view the interactive API docs at `http://localhost:8000/docs`.

### 2. Frontend Setup

Open a new terminal window and navigate to the `frontend` directory:

```bash
cd frontend
```

Install the Node modules:
```bash
npm install
```

Start the Vite development server:
```bash
npm run dev
```
> The web interface will be available at `http://localhost:5173` (or another port provided in your terminal).

---

## 💡 How to Use

1. **Upload Documents**: Navigate to the upload section of the web app and drop your technical PDFs or text files. The backend will parse the documents and store the text in SQLite.
2. **Chat with the AI**: Open the chat interface. Your questions are enriched with context from your uploaded documents and sent to Gemini.
3. **Manage Files**: View all your indexed documents on the dashboard, check their statuses, or delete them if no longer needed.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue if you encounter any bugs or have feature requests.

## 📜 License

This project is licensed under the MIT License.
