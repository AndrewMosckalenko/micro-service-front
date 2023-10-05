import { useCallback, useState } from "react";
import { IInputProps } from "..";

import styles from "./file-input.module.css";

export const FileInput = ({ onChangeFile }: IInputProps) => {
  const [file, setFile] = useState<File | null>(null);

  const onChange = useCallback(
    ({ target }) => {
      if (target.files?.[0] && onChangeFile) {
        onChangeFile(target.files[0]);
        setFile(target.files[0]);
      }
    },
    [onChangeFile],
  );

  return (
    <label>
      <span className={styles.file_input__wrapper}>
        {file ? file.name : "Add file"}
      </span>
      <input
        type="file"
        className={styles.file_input__inp}
        onChange={onChange}
      />
    </label>
  );
};
