import { useCallback } from "react";
import { IInputProps } from "..";

import styles from "./multiple-input.module.css";

export const MultipleInput = ({ value, onChange }: IInputProps) => {
  const onChangeValue = useCallback(
    ({ target }) => {
      if (onChange) onChange(target.value);
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
