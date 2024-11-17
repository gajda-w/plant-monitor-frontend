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
        const sensors = await fetch(apiUrl + "sensors").then((res) =>
          res.json()
        );
        setSensors({
          humidity: sensors.humidity,
          temperature: sensors.temperature,
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
