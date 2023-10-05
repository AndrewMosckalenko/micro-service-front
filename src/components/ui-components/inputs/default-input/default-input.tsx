import { memo, useCallback } from "react";

import styles from "./default-input.module.css";

export const DefaultInput = memo(
  ({ value, hint, onChange }: IDefaultInputProps) => {
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
  },
);

export interface IDefaultInputProps {
  value?: string;
  hint?: string;
  onChange?: (value: string) => void;
}
