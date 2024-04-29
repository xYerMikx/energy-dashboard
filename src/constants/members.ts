import { Access, Member } from "@/types/member";
import jaquiline from "@/images/member-1.svg";
import sennorita from "@/images/member-2.svg";
import firoz from "@/images/member-3.svg";

export const members: Member[] = [
  { access: Access.FULL, avatar: jaquiline, name: "Jaquiline" },
  { access: Access.LIMITED, avatar: sennorita, name: "Sennorita" },
  { access: Access.FULL, avatar: firoz, name: "Firoz" },
];
