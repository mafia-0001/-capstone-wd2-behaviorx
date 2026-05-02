import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [weather, setWeather] = useState(null);

  const data = [
    { name: "Carbon", value: 24 },
    { name: "Energy", value: 36 },
    { name: "Productivity", value: 40 },
  ];

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}?latitude=28.61&longitude=77.23&current_weather=true`
      )
      .then((res) => {
        setWeather(res.data.current_weather);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen p-6 text-white bg-gradient-to-br from-black via-gray-900 to-blue-950">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 tracking-wide">
        Impact Dashboard ✨
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {data.map((item) => (
          <div
            key={item.name}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg hover:scale-105 transition duration-300"
          >
            <p className="text-gray-400">{item.name}</p>
            <h2 className="text-3xl font-bold mt-1">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 shadow-lg">
        <h2 className="mb-4 text-lg font-semibold text-blue-400">
          Impact Visualization 📊
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Bar dataKey="value" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Weather */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-green-400 mb-2">
          Live Weather 🌤️
        </h2>

        {weather ? (
          <div className="space-y-1">
            <p className="text-xl">
              🌡 Temperature:{" "}
              <span className="font-bold text-blue-400">
                {weather.temperature}°C
              </span>
            </p>

            <p className="text-xl">
              💨 Wind Speed:{" "}
              <span className="font-bold text-green-400">
                {weather.windspeed} km/h
              </span>
            </p>

            <p className="text-sm text-gray-400 mt-2">
              Real-time data powered by API
            </p>
          </div>
        ) : (
          <p className="animate-pulse text-blue-400">
            Fetching weather data...
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;