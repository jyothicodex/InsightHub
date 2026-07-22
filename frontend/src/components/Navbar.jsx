import { FaBell, FaUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/upload":
        return "Upload Documents";
      case "/documents":
        return "Documents";
      case "/chat":
        return "AI Assistant";
      case "/settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="bg-white shadow-sm border-b px-8 py-5 flex justify-between items-center">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          {getTitle()}
        </h1>

        <p className="text-slate-500 mt-1">
          InsightHub - AI Knowledge & Document Intelligence
        </p>
      </div>

      <div className="flex items-center gap-5">

        <button className="relative text-2xl text-slate-600 hover:text-blue-600 transition">
          <FaBell />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500"></span>
        </button>

        <div
          onClick={() => navigate("/settings")}
          className="cursor-pointer flex items-center justify-center w-11 h-11 rounded-full bg-blue-600 text-white text-xl font-bold hover:bg-blue-700 transition"
          title="Profile"
        >
          <FaUserCircle />
        </div>

      </div>

    </header>
  );
}

export default Navbar;