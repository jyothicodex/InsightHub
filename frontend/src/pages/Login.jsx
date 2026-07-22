import { useState } from "react";
import { FaRobot, FaLock, FaUser } from "react-icons/fa";

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === "jyothi" && credentials.password === "123") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  const handleDemoLogin = () => {
    setCredentials({ username: "jyothi", password: "123" });
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8faff] via-[#f3efff] to-[#eef2ff] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="glass-card rounded-3xl p-10 shadow-2xl shadow-indigo-200/50 border border-white/50 backdrop-blur-xl text-center">
          
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-indigo-200">
            <FaRobot size={36} />
          </div>
          
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600 mb-2">
            InsightHub
          </h1>
          <p className="text-slate-500 font-medium mb-8">
            Industrial AI Knowledge Intelligence
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Username</label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" />
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  className="w-full pl-11 pr-4 py-3.5 bg-white/60 backdrop-blur-md border border-indigo-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-700 placeholder-slate-400 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" />
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full pl-11 pr-4 py-3.5 bg-white/60 backdrop-blur-md border border-indigo-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-700 placeholder-slate-400 transition-all"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="text-rose-500 text-sm font-semibold text-center bg-rose-50 py-2 rounded-lg border border-rose-100">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5 mt-4"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-indigo-100/50">
            <p className="text-sm text-slate-500 mb-3 font-medium">Demo Access</p>
            <button
              onClick={handleDemoLogin}
              className="w-full bg-white hover:bg-indigo-50 text-indigo-600 py-3 rounded-xl font-bold shadow-sm border border-indigo-100 transition-all"
            >
              Quick Login (Demo)
            </button>
            <p className="text-xs text-slate-400 mt-3">
              Mock Credentials: <span className="font-semibold text-slate-600">jyothi</span> / <span className="font-semibold text-slate-600">123</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
