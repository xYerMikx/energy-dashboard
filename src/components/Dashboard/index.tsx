import { Main } from "../Main";
import { Sidebar } from "../Sidebar";
import styles from "./dashboard.module.scss";

export function Dashboard() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <Main />
    </main>
  );
}
