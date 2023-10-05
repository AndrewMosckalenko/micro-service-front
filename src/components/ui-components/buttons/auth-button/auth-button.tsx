import { IButtonProps } from "..";

import styles from "./auth-button.module.css";

export function AuthButton({ label, onClick }: IButtonProps) {
  return (
    <button className={styles.auth_btn} onClick={onClick}>
      {label}
    </button>
  );
}
