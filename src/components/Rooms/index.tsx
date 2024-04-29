"use client";

import { rooms } from "@/constants/rooms";
import { RoomCard } from "../RoomCard";
import styles from "./rooms.module.scss";
import { useState } from "react";

export function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  return (
    <div className={styles.rooms}>
      {rooms.map((room) => (
        <RoomCard
          {...room}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
          key={room.alt}
        />
      ))}
    </div>
  );
}
