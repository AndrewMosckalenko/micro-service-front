import { LoadIcon } from "../../components/svg-icons";
import styles from "./load-page.module.scss";

export function LoadPage() {
  return (
    <div className={styles.loadPage}>
      <LoadIcon className={styles.loadIcon} />
    </div>
  );
}
