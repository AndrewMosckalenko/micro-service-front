import { Outlet } from "react-router-dom";
import styles from "./auth-page.module.css";

export default function AuthPage() {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.page}>
        <Outlet />
      </div>
    </div>
  );
}
