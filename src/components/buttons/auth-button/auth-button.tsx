import { useCallback } from "react";

import styles from "./auth-button.module.css";

export interface IAuthButtonProps {
  label: string;
  onClick: () => void;
}

export function AuthButton({ label, onClick }: IAuthButtonProps) {
  const onCLickButton = useCallback(onClick, [onClick]);

  return (
    <button className={styles.auth_btn} onClick={onCLickButton}>
      {label}
    </button>
  );
}
