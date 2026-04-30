import { useState } from "react";
import { login } from "../auth/auth";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name || !password) {
      alert("Please fill all fields");
      return;
    }

    const res = login(name, password);

    if (!res.success) {
      alert(res.message);
      return;
    }

    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">

      <div className="w-96 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl">

        <h2 className="text-3xl font-semibold mb-6 text-center">
          Welcome Back 👋
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded-lg bg-white/10 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-5 rounded-lg bg-white/10 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition font-semibold"
        >
          Login
        </button>

        <p className="text-center mt-5 text-gray-400">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;