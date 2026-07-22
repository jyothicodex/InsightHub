import React from 'react';
import { FaFilePdf, FaEye, FaDownload, FaTrash } from 'react-icons/fa';
import axios from 'axios';

const DocumentCard = ({ document: doc, onDelete }) => {
  const downloadUrl = `http://127.0.0.1:8000/api/documents/${doc.id}/download`;

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${doc.name}?`)) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/documents/${doc.id}`);
        if (onDelete) onDelete(doc.id);
      } catch (error) {
        console.error("Error deleting document:", error);
        alert("Failed to delete document.");
      }
    }
  };

  const handleView = () => {
    window.open(downloadUrl, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', doc.name);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-indigo-50/80 flex items-center justify-center text-indigo-500 border border-indigo-100/50 shadow-sm shrink-0 mt-1 md:mt-0">
          <FaFilePdf size={24} />
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-slate-800">{doc.name}</h3>
          <p className="text-sm text-slate-500 font-medium flex items-center gap-2 mt-1">
            <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md text-xs">{doc.category}</span>
            <span>•</span>
            <span>{doc.size}</span>
            <span>•</span>
            <span>{doc.date}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto">
        <button onClick={handleView} className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white/60 hover:bg-white text-indigo-600 px-4 py-2.5 rounded-xl font-medium transition-colors border border-indigo-100 shadow-sm">
          <FaEye /> View
        </button>
        <button onClick={handleDownload} className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl font-medium transition-colors shadow-sm shadow-indigo-200">
          <FaDownload /> Download
        </button>
        <button onClick={handleDelete} className="flex items-center justify-center bg-rose-50 hover:bg-rose-100 text-rose-500 p-3 rounded-xl transition-colors border border-rose-100">
          <FaTrash />
        </button>
      </div>
      
    </div>
  );
};

export default DocumentCard;