import { ReactNode } from "react";

export type LinkProps = {
  name: string;
  icon?: string;
  path: string;
  right?: ReactNode;
};
