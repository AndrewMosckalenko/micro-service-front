import { useCallback } from "react";
import { Button } from "../../ui-components";
import styles from "./action-form.module.scss";

export function ActionForm({ label, onClick }: IActionFormProps) {
  const onCLickForm = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <div className={styles.actionFormWrapper} onClick={onClick}>
      <div className={styles.actionForm} onClick={onCLickForm}>
        <p className={styles.actionFormTitle}>{label}</p>
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
