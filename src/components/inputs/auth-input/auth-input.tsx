import { memo, useCallback } from "react";
import styles from "./auth-input.module.css";

export interface IAuthInputProps {
  value: string;
  hint?: string;
  onChange: (value: string) => void;
}

export const AuthInput = memo(({ value, hint, onChange }: IAuthInputProps) => {
  const onChangeValue = useCallback(
    ({ target }) => {
      onChange(target.value);
    },
    [onChange],
  );

  return (
    <input
      className={styles.input}
      value={value}
      placeholder={hint}
      onChange={onChangeValue}
    />
  );
});
