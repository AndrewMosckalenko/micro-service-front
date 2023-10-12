import { SignInForm } from "../../components/forms/sign-in-form";
import styles from "./sign-in-page.module.scss";

export default function SignInPage() {
  return (
    <div className={styles.page}>
      <SignInForm />
    </div>
  );
}
