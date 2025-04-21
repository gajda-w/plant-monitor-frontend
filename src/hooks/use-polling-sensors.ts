import { apiUrl } from '@/consts';
import { useEffect, useState } from 'react';

export const usePollingSensors = () => {
  const [data, setData] = useState<
    { time: string; temperature: number; humidity: number }[]
  >([]);
  const [status, setStatus] = useState<null | {
    sensors: { temperature: string; humidity: string };
    isLightOn: boolean;
    isFanOn: boolean;
    isHumidifierOn: boolean;
    lightStartHour: number;
    lightEndHour: number;
  }>(null);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl + 'status', {
          headers: {
            'ngrok-skip-browser-warning': '69420',
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        const now = new Date();

        setStatus(result);

        setData((prev) => [
          ...prev.slice(-1000),
          {
            time: now.toLocaleTimeString(),
            temperature: parseFloat(result.sensors.temperature),
            humidity: parseFloat(result.sensors.humidity),
          },
        ]);

        setLastUpdate(now.toLocaleTimeString());
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  return { data, status, lastUpdate };
};
