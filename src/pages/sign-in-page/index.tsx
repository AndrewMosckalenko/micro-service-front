import { SignInForm } from "../../components";

import styles from "./sign-in-page.module.css";

export default function SignInPage() {
  return (
    <div className={styles.page}>
      <SignInForm />
    </div>
  );
}
