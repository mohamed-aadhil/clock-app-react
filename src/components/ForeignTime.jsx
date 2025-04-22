import React, { useEffect, useState } from 'react';

export default function ForeignTime({ selectedZone }) {
  const [time, setForeignTime] = useState('');

  useEffect(() => {
    console.log("Hi");
    const socket = new WebSocket("ws://localhost:5135/ws/time");

    socket.onopen = () => {
      console.log("WebSocket connected");
      socket.send(selectedZone); // Send selected timezone to backend
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setForeignTime(data.Time); // Ensure 'Time' matches backend JSON key
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket closed");
    };

    return () => {
      socket.close(); // Cleanup on unmount or zone change
    };
  }, [selectedZone]);

  return (
    <div>
      <h2>Foreign Time</h2>
      <p><strong>{selectedZone}:</strong> {time || "Loading..."}</p>
    </div>
  );
}
// This component connects to a WebSocket server to receive the current time for the selected timezone.
// It uses the useEffect hook to establish the connection and listen for messages.