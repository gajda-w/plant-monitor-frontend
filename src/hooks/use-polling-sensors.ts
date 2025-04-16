import { apiUrl } from '@/consts';
import { useEffect, useState } from 'react';

export const usePollingSensors = () => {
  const [data, setData] = useState<
    { time: string; temperature: number; humidity: number }[]
  >([]);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl + 'sensors', {
          headers: {
            'ngrok-skip-browser-warning': '69420',
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        const now = new Date();

        setData((prev) => [
          ...prev.slice(-1000), // Keep only the last 1000 entries
          {
            time: now.toLocaleTimeString(),
            temperature: parseFloat(result.temperature),
            humidity: parseFloat(result.humidity),
          },
        ]);

        setLastUpdate(now.toLocaleTimeString());
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000); // Fetch every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return { data, lastUpdate };
};
