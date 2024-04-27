import { Searchbar } from "../Searchbar";
import styles from "./main.module.scss";

export function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.upper}>
        <h2 className={styles.title}>Rooms</h2>
        <Searchbar placeholder="Search Anything Here..." />
      </div>
    </div>
  );
}
