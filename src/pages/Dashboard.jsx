import { useSelector } from "react-redux";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const impact = useSelector((state) => state.mood.impact);

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}?latitude=28.6&longitude=77.2&current_weather=true`
        );
        setWeather(res.data.current_weather);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const data = [
    { name: "Carbon", value: impact.carbon || 0 },
    { name: "Energy", value: impact.energy || 0 },
    { name: "Productivity", value: impact.productivity || 0 },
  ];

  return (
    <div>

      <h2 className="text-3xl mb-6">Impact Dashboard</h2>

      <div className="grid grid-cols-3 gap-4">

        <motion.div whileHover={{ scale: 1.05 }} className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10">
          <h3>Carbon 🌍</h3>
          <p className="text-2xl">{impact.carbon || 0}</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10">
          <h3>Energy ⚡</h3>
          <p className="text-2xl">{impact.energy || 0}</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10">
          <h3>Productivity 📈</h3>
          <p className="text-2xl">{impact.productivity || 0}</p>
        </motion.div>

      </div>

      {/* Chart */}
      <div className="mt-6 p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10">
        <h3 className="mb-4">Impact Visualization</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* API */}
      <div className="mt-6 p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10">
        <h3>Live Weather 🌦️</h3>

        {loading ? (
          <p className="animate-pulse">Loading...</p>
        ) : (
          <div>
            <p>Temperature: {weather?.temperature}°C</p>
            <p>Wind Speed: {weather?.windspeed}</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default Dashboard;