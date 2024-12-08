"use client";
import { Card } from "@/components/card";
import FanToggle from "@/components/fan-toggle";
import HumidifierToggle from "@/components/humidifier-toggle";
import Lamp from "@/components/lamp";
import { usePollingSensors } from "@/hooks/use-polling-sensors";
import { Thermometer, Droplets } from "lucide-react";

export default function Home() {
  const {
    sensors: { humidity, temperature },
    lastUpdate,
  } = usePollingSensors();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-wrap justify-center gap-8 p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-xl border border-white/20">
        <Lamp />
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-xl border border-white/20">
        <FanToggle />
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-xl border border-white/20">
        <h1 className="text-2xl font-semibold text-white mb-8 text-center">
          Environmental Monitor
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            icon={<Thermometer className="w-6 h-6 text-orange-400" />}
            title="Temperature"
            value={temperature}
            valueCurrency="°C"
          />
          <Card
            icon={<Droplets className="w-6 h-6 text-blue-400" />}
            title="Humidity"
            value={humidity}
            valueCurrency="%"
          />
        </div>

        <div className="mt-8 text-center text-white/60 text-sm">
          Last updated: {lastUpdate}
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-xl border border-white/20">
        <HumidifierToggle />
      </div>
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-xl border border-white/20">
        <HumidifierToggle />
      </div>
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-xl border border-white/20" />
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-xl border border-white/20" />
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-xl border border-white/20" />
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-xl border border-white/20" />
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-xl border border-white/20" />
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-xl border border-white/20" />
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-xl border border-white/20" />
    </div>
  );
}
