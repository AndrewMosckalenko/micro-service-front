import { memo } from "react";

import styles from "./default-input.module.scss";

export const DefaultInput = memo(
  (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    return <input className={styles.input} {...props} />;
  },
);
