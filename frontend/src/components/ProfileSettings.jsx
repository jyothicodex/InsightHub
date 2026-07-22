import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

function ProfileSettings() {
  const [profile, setProfile] = useState({
    name: "Jyothi",
    email: "jyothi@gmail.com",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="glass-card rounded-3xl p-8 shadow-sm border border-indigo-100/50">
      <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
          <FaUserCircle size={20} />
        </div>
        Profile Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full bg-white/60 backdrop-blur-md border border-indigo-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-700 shadow-sm transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full bg-white/60 backdrop-blur-md border border-indigo-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-700 shadow-sm transition-all"
          />
        </div>

      </div>
    </div>
  );
}

export default ProfileSettings;