"use client";
import Image from "next/image";
import styles from "./controls.module.scss";
import notifications from "@/images/notifications.svg";
import questions from "@/images/q&a.svg";
import { useState } from "react";

export function Controls() {
  const [isOn, setIsOn] = useState(false);
  const switchStatus = () => setIsOn(!isOn);

  return (
    <div className={styles.row}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="checkbox"
          onChange={switchStatus}
        />
        <div className={`${styles.switch} ${isOn ? styles.on : ""}`} />
      </label>
      <Image
        className={styles.notifications}
        src={notifications}
        alt="notification"
      />
      <Image className={styles.questions} src={questions} alt="questions" />
    </div>
  );
}
