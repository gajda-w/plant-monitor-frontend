import React, { useState } from "react";
import { Fan } from "lucide-react";

const FanToggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8">
      <div
        className={`relative w-40 h-40 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg flex items-center justify-center ${
          isOn ? "fan-container-active" : ""
        }`}
      >
        {/* Fan base ring */}
        <div className="absolute inset-0 rounded-full border-8 border-slate-300"></div>

        {/* Fan icon with animation */}
        <Fan
          size={100}
          className={`text-slate-700 transition-transform ${
            isOn ? "animate-fan-spin" : ""
          }`}
          style={{
            filter: isOn ? "blur(1px)" : "none",
            transform: `rotate(${isOn ? "0deg" : "45deg"})`,
          }}
        />

        {/* Center dot */}
        <div className="absolute w-6 h-6 rounded-full bg-slate-400 z-10"></div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setIsOn(!isOn)}
        className={`
          relative w-24 h-12 rounded-full transition-colors duration-300 focus:outline-none
          ${isOn ? "bg-blue-500 shadow-blue-500/50" : "bg-slate-300"}
          shadow-lg
        `}
      >
        <span
          className={`
          absolute left-1 top-1 w-10 h-10 rounded-full bg-white shadow-md
          transition-transform duration-300 ease-in-out
          flex items-center justify-center
          ${isOn ? "translate-x-12" : "translate-x-0"}
        `}
        >
          <Fan
            size={20}
            className={`text-slate-600 transition-all duration-300
              ${isOn ? "rotate-180 scale-110" : "rotate-0 scale-90"}
            `}
          />
        </span>
      </button>
    </div>
  );
};

export default FanToggle;
