import { Link } from "@/ui/Link";
import styles from "./members.module.scss";
import { MembersPane } from "../MembersPane";

export function Members() {
  return (
    <div className={styles.members}>
      <div className={styles.row}>
        <p>Members</p>
        <Link name="View All" path="/" />
      </div>
      <MembersPane />
    </div>
  );
}
