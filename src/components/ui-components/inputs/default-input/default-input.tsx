import { memo } from "react";

import styles from "./default-input.module.css";

export const DefaultInput = memo(
  (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    return <input className={styles.input} {...props} />;
  },
);
