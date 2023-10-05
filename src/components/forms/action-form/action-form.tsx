import { useCallback } from "react";
import { CustomButton } from "../..";
import styles from "./action-form.module.css";

export function ActionForm({ label, onClick }: IActionFormProps) {
  const onCLickForm = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <div className={styles.action_form__wrapper} onClick={onClick}>
      <div className={styles.action_form} onClick={onCLickForm}>
        <p className={styles.action_form__title}>{label}</p>
        <CustomButton label="Ok" onClick={onClick} type="pulse" />
      </div>
    </div>
  );
}

export interface IActionFormProps {
  label: string;
  onClick: () => void;
}
