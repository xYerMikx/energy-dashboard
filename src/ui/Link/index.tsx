import Image from "next/image";
import { LinkProps } from "./types";
import NextLink from "next/link";
import styles from "./link.module.scss";

export function Link({ name, icon, path, right }: LinkProps) {
  return (
    <NextLink className={styles.link} href={path}>
      {icon && <Image src={icon} alt={name} />}
      <span>{name}</span>
      {right && <span>{right}</span>}
    </NextLink>
  );
}
