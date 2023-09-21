import { useCallback } from "react";
import styles from "./multiple-input.module.css";

export const MultipleInput = ({ value, onChange }: IMultipleInputProps) => {
  const onChangeValue = useCallback(
    ({ target }) => {
      onChange(target.value);
    },
    [onChange],
  );

  return (
    <textarea
      onChange={onChangeValue}
      value={value}
      className={styles.multiple_input}
    />
  );
};

export interface IMultipleInputProps {
  value: string;
  onChange: (value: string) => void;
}
