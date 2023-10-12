import { memo } from "react";

import styles from "./multiple-input.module.scss";

export const MultipleInput = memo(
  (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    return <input {...props} className={styles.multiple_input} multiple />;
  },
);
