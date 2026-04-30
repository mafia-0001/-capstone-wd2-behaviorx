import { useDispatch } from "react-redux";
import {
  setMood,
  setTravel,
  setScreenTime,
  calculateImpact,
} from "../redux/moodSlice";
import { useNavigate } from "react-router-dom";

function Simulator() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(calculateImpact());
    navigate("/dashboard");
  };

  return (
    <div className="max-w-xl mx-auto p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10">

      <h2 className="text-2xl mb-4">Your Daily Behavior</h2>

      {/* Mood */}
      <select
        className="w-full p-3 mb-3 bg-white/10 rounded"
        onChange={(e) => dispatch(setMood(e.target.value))}
      >
        <option value="happy">Happy</option>
        <option value="lazy">Lazy</option>
        <option value="productive">Productive</option>
      </select>

      {/* Travel */}
      <select
        className="w-full p-3 mb-3 bg-white/10 rounded"
        onChange={(e) => dispatch(setTravel(e.target.value))}
      >
        <option value="car">Car</option>
        <option value="bike">Bike</option>
      </select>

      {/* Screen Time */}
      <input
        type="range"
        min="1"
        max="12"
        className="w-full mb-4"
        onChange={(e) => dispatch(setScreenTime(Number(e.target.value)))}
      />

      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-green-500 rounded-lg hover:bg-green-600 transition"
      >
        Generate Impact
      </button>
    </div>
  );
}

export default Simulator;