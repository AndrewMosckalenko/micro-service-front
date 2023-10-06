import { memo } from "react";
import styles from "./file-input.module.css";

export const FileInput = memo(
  (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    // const onChange = useCallback(
    //   ({ target }) => {
    //     if (target.files?.[0] && onChangeFile) {
    //       onChangeFile(target.files[0]);
    //       setFile(target.files[0]);
    //     }
    //   },
    //   [onChangeFile],
    // );

    return (
      <label>
        <span className={styles.file_input__wrapper}>Add file</span>
        <input type="file" className={styles.file_input__inp} {...props} />
      </label>
    );
  },
);
