"use client";
import Image from "next/image";
import styles from "./roomcard.module.scss";
import { Dispatch, SetStateAction, useState } from "react";

type RoomCardProps = {
  icon: string;
  alt: string;
  roomName: string;
  deviceAmount: number;
  selectedRoom: string | null;
  setSelectedRoom: Dispatch<SetStateAction<string | null>>;
};
export function RoomCard({
  deviceAmount,
  icon,
  roomName,
  alt,
  selectedRoom,
  setSelectedRoom,
}: RoomCardProps) {
  const handleRoomSelect = (roomName: string) => () =>
    setSelectedRoom(roomName);

  return (
    <div
      onClick={handleRoomSelect(roomName)}
      className={`${styles.card} ${
        selectedRoom === roomName ? styles.selected : ""
      }`}
    >
      <Image className={styles.image} src={icon} alt={alt} />
      <div>
        <p className={styles.room}>{roomName}</p>
        <span className={styles.amount}>{deviceAmount} Devices</span>
      </div>
    </div>
  );
}
