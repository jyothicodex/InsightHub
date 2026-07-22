import { FaSave } from "react-icons/fa";

import ProfileSettings from "../components/ProfileSettings";
import SecuritySettings from "../components/SecuritySettings";
import AISettings from "../components/AISettings";

function Settings() {

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (

    <div className="min-h-screen p-8 bg-transparent max-w-5xl mx-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600">
          Settings
        </h1>
        <p className="text-slate-600 mt-2 font-medium">
          Manage your profile, AI preferences, notifications, and security.
        </p>
      </div>

      <div className="space-y-6">
        {/* Profile */}
        <ProfileSettings />

        {/* AI Preferences */}
        <AISettings />

        {/* Security */}
        <SecuritySettings />
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-8">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-md shadow-indigo-200 hover:shadow-lg hover:-translate-y-0.5"
        >
          <FaSave />
          Save Changes
        </button>
      </div>

    </div>

  );
}

export default Settings;