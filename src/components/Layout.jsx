import { Link, useLocation } from "react-router-dom";
import { logout } from "../auth/auth";
import { motion } from "framer-motion";

function Layout({ children }) {
  const location = useLocation();

  const navItem = (path, label) => (
    <Link
      to={path}
      className={`px-4 py-2 rounded-lg transition ${
        location.pathname === path
          ? "bg-blue-500"
          : "hover:bg-white/10"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">

      {/* Sidebar */}
      <div className="w-64 m-4 p-5 rounded-xl bg-white/5 backdrop-blur border border-white/10 flex flex-col justify-between">

        <div>
          <h1 className="text-2xl font-bold mb-6">BehaviorX</h1>

          <div className="flex flex-col gap-3">
            {navItem("/", "Home")}
            {navItem("/simulator", "Simulator")}
            {navItem("/dashboard", "Dashboard")}
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
          className="bg-red-500 p-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </div>

    </div>
  );
}

export default Layout;