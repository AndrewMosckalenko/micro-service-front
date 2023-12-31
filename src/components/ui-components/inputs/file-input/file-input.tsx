import { memo } from "react";
import styles from "./file-input.module.scss";

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
        <span className={styles.fileInputWrapper}>Add file</span>
        <input type="file" className={styles.fileInputInp} {...props} />
      </label>
    );
  },
);
