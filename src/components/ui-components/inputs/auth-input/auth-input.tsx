import { memo, useCallback } from "react";
import { IInputProps } from "..";

import styles from "./auth-input.module.css";

export const AuthInput = memo(({ value, hint, onChange }: IInputProps) => {
  const onChangeValue = useCallback(
    ({ target }) => {
      if (onChange) onChange(target.value);
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
