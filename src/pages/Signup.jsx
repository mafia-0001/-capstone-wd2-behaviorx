import { useState } from "react";
import { signup } from "../auth/auth";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !password) {
      alert("Fill all fields");
      return;
    }

    signup({ name, password });
    alert("Account created!");
    navigate("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">

      <div className="w-96 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl">

        <h2 className="text-3xl font-semibold mb-6 text-center">
          Create Account 🚀
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded-lg bg-white/10 outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-5 rounded-lg bg-white/10 outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full py-3 bg-green-500 rounded-lg hover:bg-green-600 transition font-semibold"
        >
          Signup
        </button>

        <p className="text-center mt-5 text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;