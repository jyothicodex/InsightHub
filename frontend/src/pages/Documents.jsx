import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import DocumentCard from "../components/DocumentCard";
import axios from 'axios';

function Documents() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/documents');
        setDocuments(response.data.documents || []);
      } catch (error) {
        console.error("Error fetching documents", error);
      }
    };
    fetchDocs();
  }, []);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      doc.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen p-8 bg-transparent">

      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600">
          Documents
        </h1>

        <p className="text-slate-600 mt-2 font-medium">
          Manage, search, and organize your industrial documents.
        </p>
      </div>

      {/* Search & Filter */}

      <div className="glass-card rounded-3xl p-6 mb-8 flex flex-col md:flex-row gap-4 justify-between">

        <div className="relative w-full md:w-96">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" />

          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white/60 backdrop-blur-md border border-indigo-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
          />

        </div>

        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(e.target.value)
          }
          className="bg-white/60 backdrop-blur-md border border-indigo-100 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
        >
          <option>All Categories</option>
          <option>Uploaded</option>
        </select>

      </div>

      {/* Document Cards */}

      {filteredDocuments.length > 0 ? (
        <div className="space-y-6">

          {filteredDocuments.map((doc) => (
            <DocumentCard
              key={doc.id}
              document={doc}
              onDelete={(id) => setDocuments(docs => docs.filter(d => d.id !== id))}
            />
          ))}

        </div>
      ) : (
        <div className="glass-card rounded-3xl p-12 text-center">

          <h2 className="text-2xl font-bold text-slate-700">
            No Documents Found
          </h2>

          <p className="text-slate-500 mt-2 font-medium">
            Try changing the search or upload a new file.
          </p>

        </div>
      )}

    </div>
  );
}

export default Documents;