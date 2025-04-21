'use client';
import React from 'react';
import { Lamp as LampIcon, Power } from 'lucide-react';
import { apiUrl } from '@/consts';

export default function Lamp({
  isOn,
  lampEndHour,
  lampStartHour,
}: {
  isOn: boolean;
  lampStartHour: number;
  lampEndHour: number;
}) {
  // const [isOn, setIsOn] = useState(false);
  const handleChangeTo6To17 = async () => {
    try {
      const res = await fetch(apiUrl + 'light-hours', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420',
        },
        body: JSON.stringify({ startHour: 6, endHour: 17 }),
      });

      const result = await res.json();
      console.log(result);
    } catch (err) {
      console.log(err);
      return;
    }
  };
  const handleChangeTo6To24 = async () => {
    try {
      const res = await fetch(apiUrl + 'light-hours', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420',
        },
        body: JSON.stringify({ startHour: 6, endHour: 24 }),
      });

      const result = await res.json();
      console.log(result);
    } catch (err) {
      console.log(err);
      return;
    }
  };

  return (
    <>
      <div className='relative flex flex-col items-center justify-center gap-8'>
        {/* Ambient glow effect */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl transition-all duration-700 ${
            isOn ? 'bg-amber-200/50 scale-75' : 'bg-transparent scale-0'
          }`}
          aria-hidden='true'
        />
        {/* Lamp fixture */}
        <div className='relative'>
          {/* Lamp cord */}
          <div className='absolute left-1/2 -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-zinc-300 to-zinc-400' />

          {/* Lamp head */}
          <div
            className={`relative z-10 w-40 h-40 rounded-full transition-all duration-500 ${
              isOn ? 'bg-amber-100' : 'bg-zinc-100'
            }`}
          >
            <div
              className={`absolute inset-2 rounded-full transition-all duration-500 ${
                isOn ? 'bg-amber-200' : 'bg-zinc-200'
              }`}
            >
              <div
                className={`absolute inset-4 rounded-full transition-all duration-500 ${
                  isOn ? 'bg-amber-300' : 'bg-zinc-300'
                }`}
              >
                <LampIcon
                  className={`absolute inset-0 w-full h-full p-4 transition-colors duration-500 ${
                    isOn ? 'text-amber-500' : 'text-zinc-500'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <p>Lamp start hour: {lampStartHour}</p>
        <p>LampEndHour: {lampEndHour}</p>
      </div>
      <button
        className='bg-green-200 text-black p-6'
        onClick={handleChangeTo6To17}
      >
        Change to 6-17
      </button>
      <button
        onClick={handleChangeTo6To24}
        className='bg-green-200 text-black p-6'
      >
        Change to 6-24
      </button>
    </>
  );
}

// TODO: for now button is not used. Have to create a backend first
export const LampButton = ({
  isOn,
  setIsOn,
}: {
  isOn: boolean;
  setIsOn: (isOn: boolean) => void;
}) => {
  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={`group relative flex items-center justify-center w-16 h-16 rounded-full transition-all duration-500 ${
        isOn
          ? 'bg-amber-500 hover:bg-amber-600'
          : 'bg-zinc-200 hover:bg-zinc-300'
      }`}
      aria-label={isOn ? 'Turn lamp off' : 'Turn lamp on'}
    >
      <Power
        className={`w-8 h-8 transition-all duration-500 ${
          isOn ? 'text-white' : 'text-zinc-600'
        }`}
      />

      {/* Button glow effect */}
      <div
        className={`absolute inset-0 rounded-full blur-md transition-all duration-500 ${
          isOn ? 'bg-amber-500/50 scale-125' : 'bg-transparent scale-0'
        }`}
        aria-hidden='true'
      />
    </button>
  );
};
