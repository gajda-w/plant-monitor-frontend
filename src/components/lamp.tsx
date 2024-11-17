import React, { useState } from "react";
import { Lamp as LampIcon, Power } from "lucide-react";

export default function Lamp() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center gap-8">
      {/* Ambient glow effect */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl transition-all duration-700 ${
          isOn ? "bg-amber-200/50 scale-75" : "bg-transparent scale-0"
        }`}
        aria-hidden="true"
      />

      {/* Lamp fixture */}
      <div className="relative">
        {/* Lamp cord */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-zinc-300 to-zinc-400" />

        {/* Lamp head */}
        <div
          className={`relative z-10 w-40 h-40 rounded-full transition-all duration-500 ${
            isOn ? "bg-amber-100" : "bg-zinc-100"
          }`}
        >
          <div
            className={`absolute inset-2 rounded-full transition-all duration-500 ${
              isOn ? "bg-amber-200" : "bg-zinc-200"
            }`}
          >
            <div
              className={`absolute inset-4 rounded-full transition-all duration-500 ${
                isOn ? "bg-amber-300" : "bg-zinc-300"
              }`}
            >
              <LampIcon
                className={`absolute inset-0 w-full h-full p-4 transition-colors duration-500 ${
                  isOn ? "text-amber-500" : "text-zinc-500"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Power button */}
      <button
        onClick={() => setIsOn(!isOn)}
        className={`group relative flex items-center justify-center w-16 h-16 rounded-full transition-all duration-500 ${
          isOn
            ? "bg-amber-500 hover:bg-amber-600"
            : "bg-zinc-200 hover:bg-zinc-300"
        }`}
        aria-label={isOn ? "Turn lamp off" : "Turn lamp on"}
      >
        <Power
          className={`w-8 h-8 transition-all duration-500 ${
            isOn ? "text-white" : "text-zinc-600"
          }`}
        />

        {/* Button glow effect */}
        <div
          className={`absolute inset-0 rounded-full blur-md transition-all duration-500 ${
            isOn ? "bg-amber-500/50 scale-125" : "bg-transparent scale-0"
          }`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
