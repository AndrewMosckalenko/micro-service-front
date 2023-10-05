import styles from "./default-button.module.css";

export function DefaultButton({ label, onClick }: IDefaultButtonProps) {
  return (
    <button className={styles.default_btn} onClick={onClick}>
      {label}
    </button>
  );
}

export interface IDefaultButtonProps {
  label: string;
  onClick: () => void;
}
