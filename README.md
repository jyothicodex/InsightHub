<div align="center">
  <div style="background-color: #4F46E5; padding: 20px; border-radius: 20px; display: inline-block; margin-bottom: 20px; box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3);">
    <h1 style="color: white; margin: 0; font-size: 2.5em;">🏭 InsightHub</h1>
  </div>
  <h3>Industrial Knowledge Intelligence Platform</h3>
  <p><em>An enterprise-grade, AI-driven assistant for extracting insights from technical manuals, safety guidelines, and inspection reports using advanced Retrieval-Augmented Generation (RAG).</em></p>

  <p>
    <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" alt="FastAPI" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/LangChain-121212?style=for-the-badge&logo=chainlink&logoColor=white" alt="Langchain" />
    <img src="https://img.shields.io/badge/Gemini_2.5_Flash-8E75B2?style=for-the-badge&logo=google&logoColor=white" alt="Gemini" />
    <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" />
  </p>
</div>

---

## 🌟 Overview

**InsightHub** is designed to bridge the gap between complex industrial documentation and actionable insights. By leveraging the power of **Google's Gemini 2.5 Flash** large language model orchestrated through **LangChain**, it allows engineers and technicians to instantly "chat" with their technical documents. 

Instead of manually digging through hundreds of pages of PDF manuals, users can simply upload the document and ask natural language questions. The system intelligently retrieves the most relevant context and generates precise, professional answers.

---

## 🚀 Key Features

- **🧠 Advanced RAG Architecture:** Utilizes LangChain to build a Retrieval-Augmented Generation pipeline. It extracts text via `PyPDFLoader`, injects context directly into system prompts, and queries the Gemini LLM for highly accurate, hallucination-free answers based *strictly* on uploaded documents.
- **📄 Seamless Document Ingestion:** A robust FastAPI backend handles asynchronous uploads of PDFs and text files, immediately processing and parsing the data for AI consumption.
- **⚡ High-Performance Backend:** Built on FastAPI and Uvicorn, the API is incredibly fast, type-safe (via Pydantic), and capable of handling concurrent inference requests efficiently.
- **🎨 State-of-the-Art Frontend:** A stunning, responsive UI built with React 19, Vite, and Tailwind CSS v4. Features a glassmorphism design, fluid animations, and a highly intuitive user experience.
- **🗄️ Localized Data Management:** Employs a lightweight, serverless SQLite database for seamless tracking of document metadata, file states, and raw text caching—ensuring zero complex database configurations to get started.
- **🔐 Frictionless Demo Access:** Includes a fully styled mock authentication flow with a "Quick Login" mechanism, allowing evaluators and recruiters to instantly test the platform.

---

## 🏗️ System Architecture

1. **Client Layer:** React SPA making RESTful Axios calls.
2. **API Layer:** FastAPI exposing `/api/upload`, `/api/documents`, and `/api/chat`.
3. **Data Layer:** SQLite relational database storing document blobs and metadata.
4. **AI/ML Layer:** LangChain orchestrating Google Generative AI (Gemini) inference, dynamically injecting parsed SQLite document context into the conversational chain.

---

## 📂 Project Structure

```text
InsightHub/
├── backend/                  # FastAPI & AI Server
│   ├── uploads/              # Storage for uploaded PDFs & text files
│   ├── database.sqlite       # Local SQLite database for document metadata
│   ├── main.py               # Core API routes, DB logic, and Langchain RAG
│   └── requirements.txt      # Python dependencies
│
├── frontend/                 # React UI Application
│   ├── public/               # Static assets (favicons, etc.)
│   ├── src/
│   │   ├── components/       # Reusable UI elements (Navbar, Sidebar, Cards)
│   │   ├── pages/            # Main application views (Chat, Dashboard, Upload)
│   │   ├── App.jsx           # Application routing
│   │   └── index.css         # Tailwind CSS global styles
│   ├── package.json          # Node dependencies
│   └── vite.config.js        # Vite bundler configuration
│
└── README.md                 # Project documentation
```

---

## 💻 Quick Start Guide

Want to run InsightHub locally? Follow these simple steps.

### Prerequisites
- Node.js (v18+)
- Python (v3.10+)
- [Google AI Studio API Key](https://aistudio.google.com/)

### 1️⃣ Backend Setup (FastAPI & AI Engine)

Open your terminal and navigate to the `backend` folder:
```bash
cd backend
```

Create a virtual environment and install dependencies:
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate

# Install requirements
pip install -r requirements.txt
```

**Set up your AI API Key:**
Create a `.env` file in the root of the `backend` directory:
```env
GOOGLE_API_KEY="your_gemini_api_key_here"
```

Start the inference server:
```bash
python main.py
```
*The backend API and interactive Swagger UI are now running at `http://localhost:8000/docs`.*

### 2️⃣ Frontend Setup (React UI)

Open a new terminal window and navigate to the `frontend` folder:
```bash
cd frontend
```

Install the dependencies and start Vite:
```bash
npm install
npm run dev
```
*The web interface is now live at `http://localhost:5173`.*

---

## 🎮 How to Demo

1. **Login:** Open the frontend URL (`http://localhost:5173`). 
   - Click the **Quick Login (Demo)** button on the authentication screen to instantly access the dashboard.
   - Or, manually enter the demo credentials: 
     - **Username:** `jyothi`
     - **Password:** `123`
2. **Upload:** Head to the Upload section and drop a technical PDF (like a manual or code of conduct).
3. **Chat:** Navigate to the AI Chat interface and ask a question about the document you just uploaded. Watch as Gemini extracts the exact answer from your file!

---



---
<div align="center">
  <i>If you found this project interesting, please consider leaving a ⭐ on the repository!</i>
</div>
