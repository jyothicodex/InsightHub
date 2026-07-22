import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaFileAlt,
  FaRobot,
  FaCogs,
  FaExclamationTriangle,
} from "react-icons/fa";

import Hero from "../components/Hero";
import StatCard from "../components/StatCard";

function Dashboard() {
  const [docCount, setDocCount] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/documents');
        setDocCount(response.data.documents ? response.data.documents.length : 0);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-transparent">

      {/* Hero */}
      <div className="max-w-6xl mx-auto mb-8">
        <Hero />
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">

        <StatCard
          title="Documents"
          value={docCount}
          icon={<FaFileAlt className="text-indigo-600" />}
          color="text-indigo-600"
        />

        <StatCard
          title="AI Queries"
          value="12"
          icon={<FaRobot className="text-purple-600" />}
          color="text-purple-600"
        />

        <StatCard
          title="Assets"
          value="0"
          icon={<FaCogs className="text-blue-600" />}
          color="text-blue-600"
        />

        <StatCard
          title="Alerts"
          value="0"
          icon={<FaExclamationTriangle className="text-rose-600" />}
          color="text-rose-600"
        />

      </div>

    </div>
  );
}

export default Dashboard;