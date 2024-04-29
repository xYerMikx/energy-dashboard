import { Main } from "../Main";
import { RightSidebar } from "../RightSidebar";
import { Sidebar } from "../Sidebar";
import styles from "./dashboard.module.scss";

export function Dashboard() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <Main />
      <RightSidebar />
    </main>
  );
}
