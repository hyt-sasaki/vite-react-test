import { useEffect, useState } from "react";

function convertToHHMMSS(unixTime: number) {
  const date = new Date(unixTime);
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
export function useTime(interval: number) {
  const [time, updateTime] = useState(Date.now());

  useEffect(() => {
    const timeoutId = setTimeout(() => updateTime(Date.now()), interval);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [time]);

  return {
    unixTime: time,
    readableTime: convertToHHMMSS(time),
  };
}
