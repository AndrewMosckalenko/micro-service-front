import { useState, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { AuthButton, AuthInput } from "../..";

import styles from "./sign-in-form.module.css";
import { useDispatch } from "react-redux";
import { requestSignInAction } from "../../../redux/actions/action-creators";

export const SignInForm = memo(() => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickSignInBtn = useCallback(() => {
    dispatch(requestSignInAction(email, password));
  }, [email, password, dispatch]);

  const onClickSignUpBtn = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className={styles.sign_in_form}>
      <h1 className={styles.sign_in_form__title}>Sign in</h1>
      <AuthInput value={email} hint="email" onChange={setEmail} />
      <AuthInput value={password} hint="password" onChange={setPassword} />
      <div className={styles.sign_up_form__btns}>
        <AuthButton label="sign in" onClick={onClickSignInBtn} />
        <AuthButton label="sign up" onClick={onClickSignUpBtn} />
      </div>
    </div>
  );
});
