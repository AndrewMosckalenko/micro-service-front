import { useCallback } from "react";
import { Button } from "../../ui-components";
import styles from "./action-form.module.scss";

export function ActionForm({ label, onClick }: IActionFormProps) {
  const onCLickForm = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <div className={styles.action_form__wrapper} onClick={onClick}>
      <div className={styles.action_form} onClick={onCLickForm}>
        <p className={styles.action_form__title}>{label}</p>
        <Button onClick={onClick} typeButton="pulse">
          Ok
        </Button>
      </div>
    </div>
  );
}

export interface IActionFormProps {
  label: string;
  onClick: () => void;
}
