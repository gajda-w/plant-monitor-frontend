import { apiUrl } from "@/consts";
import { useEffect, useState } from "react";

export const usePollingSensors = () => {
  const [sensors, setSensors] = useState<{
    temperature: string;
    humidity: string;
  }>({ humidity: "0", temperature: "0" });
  const [lastUpdate, setLastUpdate] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl + "sensors", {
          headers: {
            "ngrok-skip-browser-warning": "69420",
            // "Access-Control-Allow-Origin": "http://localhost:3000",
            // authority: "3f3f-87-207-178-219.ngrok-free.app",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        setSensors({
          humidity: data.humidity,
          temperature: data.temperature,
        });

        setLastUpdate(new Date().toLocaleTimeString());
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return { sensors, lastUpdate };
};
