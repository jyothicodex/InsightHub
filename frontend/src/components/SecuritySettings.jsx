import { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function SecuritySettings() {
  const [showPassword, setShowPassword] = useState(false);

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    if (
      passwords.currentPassword === "" ||
      passwords.newPassword === "" ||
      passwords.confirmPassword === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    alert("Password updated successfully! (Frontend Demo)");
  };

  return (
    <div className="glass-card rounded-3xl p-8 shadow-sm border border-indigo-100/50">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
            <FaLock size={20} />
          </div>
          Security Settings
        </h2>
        <button
          onClick={() => setShowPassword(!showPassword)}
          className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
          {showPassword ? "Hide Passwords" : "Show Passwords"}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Current Password */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Current Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="currentPassword"
            value={passwords.currentPassword}
            onChange={handleChange}
            className="w-full bg-white/60 backdrop-blur-md border border-indigo-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-700 shadow-sm transition-all"
          />
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            New Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="newPassword"
            value={passwords.newPassword}
            onChange={handleChange}
            className="w-full bg-white/60 backdrop-blur-md border border-indigo-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-700 shadow-sm transition-all"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handleChange}
            className="w-full bg-white/60 backdrop-blur-md border border-indigo-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-700 shadow-sm transition-all"
          />
        </div>

      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleUpdate}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all shadow-md shadow-indigo-200"
        >
          Update Password
        </button>
      </div>

    </div>
  );
}

export default SecuritySettings;