import { Link } from "@/ui/Link";
import styles from "./history.module.scss";
import { HistoryItem } from "../HistoryItem";
import { historyItems } from "@/constants/history";

export function History() {
  return (
    <div className={styles.history}>
      <div className={styles.row}>
        <p>History</p>
        <Link name="View All" path="/" />
      </div>
      <div className={styles.pane}>
        {historyItems.map((item, index) => (
          <HistoryItem {...item} key={index} />
        ))}
      </div>
    </div>
  );
}
