import { Device } from "@/types/device";
import { Member } from "@/types/member";
import styles from "./item.module.scss";
import { Status } from "@/types/status";

type HistoryItemProps = {
  deviceName: Device["name"];
  initializer: Member["name"];
  time: string;
  status: Status;
};
export function HistoryItem({
  deviceName,
  initializer,
  time,
  status,
}: HistoryItemProps) {
  return (
    <div className={styles.item}>
      <div
        className={`${styles.status} ${
          status === Status.ON ? styles.status__on : styles.status__off
        }`}
      />
      <div className={styles.info}>
        <p className={styles.device}>{deviceName}</p>
        <p className={styles.statuses}>
          Turned {status} <span>• {initializer}</span>
        </p>
      </div>
      <span className={styles.time}>{time}</span>
    </div>
  );
}
