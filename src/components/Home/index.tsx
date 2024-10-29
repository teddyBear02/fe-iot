// RealtimeData.js
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:8080"; // Thay đổi thành URL server của bạn

const RealTimeComponent = () => {
  const [data, setData] = useState({ timestamp: "N/A", value: "N/A" });

  useEffect(() => {
    // Kết nối đến server Socket.IO
    const socket = io(SOCKET_SERVER_URL);

    // Lắng nghe sự kiện 'updateData' từ server
    socket.on("updateData", (newData) => {
      setData(newData);
    });

    // Dọn dẹp kết nối khi component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Realtime Data Updates</h1>
      <div>
        <p>Timestamp: {data.timestamp}</p>
        <p>Value: {data.value}</p>
      </div>
    </div>
  );
};

export default RealTimeComponent;
