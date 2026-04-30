import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full text-center">

      <h1 className="text-5xl font-bold mb-4">
        BehaviorX 🌍
      </h1>

      <p className="text-gray-400 mb-6 max-w-xl">
        A simulation platform that shows how your daily behavior
        impacts the environment and global systems.
      </p>

      <Link to="/simulator">
        <button className="px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition">
          Start Simulation
        </button>
      </Link>

    </div>
  );
}

export default Home;