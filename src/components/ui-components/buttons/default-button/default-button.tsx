import React from "react";
import styles from "./default-button.module.css";

export function DefaultButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return <button className={styles.default_btn} {...props} />;
}
