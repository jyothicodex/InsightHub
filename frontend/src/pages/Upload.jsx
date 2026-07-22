import React, { useState } from 'react';
import axios from 'axios';
import { FiUploadCloud, FiFileText, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, uploading, success, error
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setStatus('idle');
      setMessage('');
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setStatus('uploading');
    setMessage('Uploading and processing document...');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.status === 'Success') {
        setStatus('success');
        setMessage(response.data.message);
      } else {
        setStatus('error');
        setMessage(response.data.message || 'Error uploading file.');
      }
    } catch (error) {
      setStatus('error');
      setMessage(error.response?.data?.message || 'Server error during upload.');
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600 mb-2">Upload Document</h1>
      <p className="text-slate-600 mb-8 font-medium">
        Upload maintenance manuals, inspection reports, or safety guidelines to add them to the AI's knowledge base.
      </p>

      <div className="glass-card rounded-3xl p-12 text-center transition-all">
        
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full flex items-center justify-center text-indigo-500 shadow-inner border border-indigo-100/50">
            {status === 'success' ? <FiCheckCircle size={40} className="text-green-500" /> : status === 'error' ? <FiXCircle size={40} className="text-red-500" /> : <FiUploadCloud size={40} />}
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-700 mb-4">
          Select a file to upload
        </h2>

        <div className="mb-6 flex justify-center">
          <label className="cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-md shadow-indigo-200 hover:shadow-lg hover:-translate-y-0.5">
            Browse Files
            <input 
              type="file" 
              className="hidden" 
              onChange={handleFileChange}
              accept=".pdf,.txt"
            />
          </label>
        </div>

        {file && (
          <div className="flex items-center justify-center gap-3 text-indigo-700 bg-indigo-50/80 backdrop-blur-sm py-3 px-6 rounded-xl inline-flex mx-auto mb-6 border border-indigo-100 shadow-sm">
            <FiFileText size={20} className="text-indigo-500" />
            <span className="font-semibold">{file.name}</span>
          </div>
        )}

        {status === 'uploading' && (
          <div className="text-indigo-600 font-bold animate-pulse mb-4">
            {message}
          </div>
        )}
        
        {status === 'success' && (
          <div className="text-green-600 font-bold mb-4">
            {message}
          </div>
        )}

        {status === 'error' && (
          <div className="text-red-600 font-bold mb-4">
            {message}
          </div>
        )}

        {file && status !== 'uploading' && status !== 'success' && (
          <button 
            onClick={handleUpload}
            className="w-full sm:w-auto mt-2 bg-slate-800 hover:bg-slate-900 text-white px-10 py-3.5 rounded-xl font-semibold transition-all shadow-md"
          >
            Process Document
          </button>
        )}
      </div>
    </div>
  );
};

export default Upload;