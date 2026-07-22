import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUpload,
  FaFileAlt,
  FaRobot,
  FaCog,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: <FaHome />,
  },
  {
    name: "Upload Documents",
    path: "/upload",
    icon: <FaUpload />,
  },
  {
    name: "Documents",
    path: "/documents",
    icon: <FaFileAlt />,
  },
  {
    name: "AI Assistant",
    path: "/chat",
    icon: <FaRobot />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <FaCog />,
  },
];

function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="w-72 glass-sidebar flex flex-col h-screen z-10 relative">

      {/* Logo */}
      <div className="p-6 border-b border-indigo-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
          <FaRobot size={20} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">
            InsightHub
          </h1>
          <p className="text-xs font-medium text-slate-500 mt-0.5">
            AI Knowledge
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3.5 rounded-xl mb-2 transition-all font-medium ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100/50"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
              }`
            }
          >
            <span className="text-lg">
              {item.icon}
            </span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Profile */}
      <div
        onClick={() => navigate("/settings")}
        className="border-t border-indigo-100 p-5 cursor-pointer hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-100">
              J
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Jyothi</p>
            </div>
          </div>
          <div className="text-slate-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;