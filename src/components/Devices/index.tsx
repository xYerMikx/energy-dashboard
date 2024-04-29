import { devices } from "@/constants/devices";
import styles from "./devices.module.scss";
import { DeviceCard } from "../DeviceCard";

export function Devices() {
  return (
    <section className={styles.devices}>
      <h2 className={styles.title}>Devices</h2>
      <div className={styles.cards}>
        {devices.map((device) => (
          <DeviceCard {...device} key={device.alt} />
        ))}
      </div>
    </section>
  );
}
