import styles from "./membersPane.module.scss";
import { members } from "@/constants/members";
import { Member } from "../Member";

export function MembersPane() {
  return (
    <div className={styles.pane}>
      <div className={styles.members}>
        {members.map((member) => (
          <Member {...member} key={member.name} />
        ))}
      </div>
      <button className={styles.add}>Add member</button>
    </div>
  );
}
