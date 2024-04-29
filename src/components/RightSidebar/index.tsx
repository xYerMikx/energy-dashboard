import { Controls } from "../Controls";
import { History } from "../History";
import { Members } from "../Members";
import styles from "./sidebar.module.scss";

export function RightSidebar() {
  return (
    <div className={styles.sidebar}>
      <Controls />
      <div className={styles.content}>
        <Members />
        <History />
      </div>
    </div>
  );
}
