import { EnumValues } from "./helperTypes";

export enum Access {
  FULL = "Full",
  LIMITED = "Limited",
}
export type Member = {
  avatar: string;
  name: string;
  access: EnumValues<typeof Access>;
};
