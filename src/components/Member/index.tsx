import { EnumValues } from "@/types/helperTypes";
import { Access } from "@/types/member";
import Image from "next/image";
import styles from "./member.module.scss";

type MemberProps = {
  avatar: string;
  name: string;
  access: EnumValues<typeof Access>;
};
export function Member({ access, avatar, name }: MemberProps) {
  return (
    <div className={styles.member}>
      <Image src={avatar} alt={name} />
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.access}>{access} Access</p>
      </div>
    </div>
  );
}
