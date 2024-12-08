import React, { useState } from "react";
import { CloudFog, Power } from "lucide-react";

export default function HumidifierToggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative">
        {/* Humidifier Base */}
        <div
          className={`w-48 h-64 rounded-3xl bg-gradient-to-br transition-colors duration-500 ${
            isOn
              ? "from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30"
              : "from-gray-200 to-gray-300"
          }`}
        >
          {/* Water Tank */}
          <div
            className={`absolute left-4 right-4 bottom-4 h-24 rounded-2xl transition-colors duration-500 ${
              isOn ? "bg-blue-400" : "bg-gray-100"
            }`}
          >
            <div
              className={`h-full w-full rounded-2xl transition-opacity duration-500 ${
                isOn ? "opacity-50" : "opacity-20"
              }`}
              style={{
                background:
                  "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
              }}
            />
          </div>

          {/* Mist Output */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-700" />

          {/* Animated Mist */}
          <div
            className={`absolute -top-4 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
              isOn ? "opacity-100" : "opacity-0"
            }`}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="relative">
                <div
                  className={`absolute w-24 h-24 -translate-x-1/2 rounded-full bg-white/5 backdrop-blur-sm
                  animate-mist-${i + 1} transform-gpu`}
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    animation: `mist${i + 1} 3s infinite`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Control Panel */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2">
            <CloudFog
              className={`w-8 h-8 transition-colors duration-500 ${
                isOn ? "text-blue-100" : "text-gray-400"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Power Button */}
      <button
        onClick={() => setIsOn(!isOn)}
        className={`group relative inline-flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-500 ${
          isOn
            ? "bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/30"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        <Power
          className={`w-6 h-6 transition-colors duration-500 ${
            isOn ? "text-white" : "text-gray-600"
          }`}
        />
        <span className="sr-only">Toggle humidifier</span>

        {/* Power Button Ring */}
        <div
          className={`absolute inset-0 rounded-full border-2 transition-colors duration-500 ${
            isOn ? "border-blue-400" : "border-gray-300"
          }`}
        />
      </button>
    </div>
  );
}
