"use client";
import Image from "next/image";
import styles from "./card.module.scss";
import { useState } from "react";

type DeviceCardProps = {
  name: string;
  icon: string;
  alt: string;
};
export function DeviceCard({ alt, icon, name }: DeviceCardProps) {
  const [isDeviceOn, setIsDeviceOn] = useState(false);
  const switchDeviceStatus = () => setIsDeviceOn(!isDeviceOn);

  return (
    <div className={`${styles.card} ${isDeviceOn ? styles.active : ""}`}>
      <div className={styles.row}>
        <p>{isDeviceOn ? "On" : "Off"}</p>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="checkbox"
            onChange={switchDeviceStatus}
          />
          <div className={`${styles.switch} ${isDeviceOn ? styles.on : ""}`} />
        </label>
      </div>
      <Image className={styles.icon} src={icon} alt={alt} />
      <p className={styles.name}>{name}</p>
    </div>
  );
}
