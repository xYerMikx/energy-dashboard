import styles from "./searchbar.module.scss";
import { SearchbarProps } from "./types";
export function Searchbar({ placeholder }: SearchbarProps) {
  return (
    <input className={styles.searchbar} type="text" placeholder={placeholder} />
  );
}
