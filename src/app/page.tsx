import { Thermometer, Droplets } from "lucide-react";

export default async function Home() {
  const sensors = await fetch("http://localhost:4000/api/sensors").then((res) =>
    res.json()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-xl border border-white/20">
        <h1 className="text-2xl font-semibold text-white mb-8 text-center">
          Environmental Monitor
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Temperature Card */}
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Thermometer className="w-6 h-6 text-orange-400" />
                <span className="text-white/80">Temperature</span>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-white">
                {sensors.temperature}
              </span>
              <span className="text-xl text-white/80 mb-1">°C</span>
            </div>
          </div>

          {/* Humidity Card */}
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Droplets className="w-6 h-6 text-blue-400" />
                <span className="text-white/80">Humidity</span>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-white">
                {sensors.humadity}
              </span>
              <span className="text-xl text-white/80 mb-1">%</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-white/60 text-sm">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
