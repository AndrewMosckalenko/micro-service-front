import { useCallback } from "react";
import { AuthButton } from "../..";
import styles from "./action-form.module.css";

export function ActionForm({ label, onClick }: IActionFormProps) {
  const onCLickForm = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <div className={styles.action_form__wrapper} onClick={onClick}>
      <div className={styles.action_form} onClick={onCLickForm}>
        <p className={styles.action_form__title}>{label}</p>
        <AuthButton label="Ok" onClick={onClick} />
      </div>
    </div>
  );
}

export interface IActionFormProps {
  label: string;
  onClick: () => void;
}
