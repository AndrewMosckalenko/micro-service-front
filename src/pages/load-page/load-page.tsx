import { LoadIcon } from "../../components";
import styles from "./load-page.module.css";

export function LoadPage() {
  return (
    <div className={styles.load_page}>
      <LoadIcon className={styles.load_icon} />
    </div>
  );
}
