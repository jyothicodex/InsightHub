import { useState } from "react";
import { FaRobot } from "react-icons/fa";

function AISettings() {
  const [aiSettings, setAiSettings] = useState({
    model: "gemini-2.5-flash",
    responseLength: "Medium",
    theme: "Light",
  });

  const handleChange = (e) => {
    setAiSettings({
      ...aiSettings,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="glass-card rounded-3xl p-8 shadow-sm border border-indigo-100/50">
      <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
          <FaRobot size={20} />
        </div>
        AI Preferences
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            AI Model
          </label>
          <select
            name="model"
            value={aiSettings.model}
            onChange={handleChange}
            className="w-full bg-white/60 backdrop-blur-md border border-indigo-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-700 shadow-sm"
          >
            <option value="gemini-2.5-flash">Gemini 2.5 Flash</option>
            <option value="gemini-1.5-pro">Gemini 1.5 Pro</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Response Length
          </label>
          <select
            name="responseLength"
            value={aiSettings.responseLength}
            onChange={handleChange}
            className="w-full bg-white/60 backdrop-blur-md border border-indigo-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-700 shadow-sm"
          >
            <option value="Short">Short & Concise</option>
            <option value="Medium">Medium (Balanced)</option>
            <option value="Long">Long & Detailed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            App Theme
          </label>
          <select
            name="theme"
            value={aiSettings.theme}
            onChange={handleChange}
            className="w-full bg-white/60 backdrop-blur-md border border-indigo-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-700 shadow-sm"
          >
            <option value="Light">Light Mode</option>
            <option value="Dark">Dark Mode</option>
            <option value="System">System Default</option>
          </select>
        </div>

      </div>
    </div>
  );
}

export default AISettings;
