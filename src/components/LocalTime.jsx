import React, { useEffect, useState } from 'react';

export default function LocalTime() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString();
      setLocalTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Local Time: {localTime}</p>;
}
