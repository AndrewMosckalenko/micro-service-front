import { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button, Input } from "../../ui-components";
import { useSignInMutation } from "../../../redux/api";
import { addTokenToLocalStorage } from "../../../utils";
import { setToken } from "../../../redux/auth-slice";

import styles from "./sign-in-form.module.css";

export const SignInForm = memo(() => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signIn] = useSignInMutation();

  const onClickSignInBtn = useCallback(() => {
    signIn({ email, password }).then((res) => {
      addTokenToLocalStorage(res.data?.access_token);
      dispatch(setToken(res.data?.access_token));
    });
  }, [email, password, dispatch, signIn]);

  const onClickSignUpBtn = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className={styles.sign_in_form}>
      <h1 className={styles.sign_in_form__title}>Sign in</h1>
      <Input value={email} hint="email" onChange={setEmail} />
      <Input value={password} hint="password" onChange={setPassword} />
      <div className={styles.sign_up_form__btns}>
        <Button label="sign in" onClick={onClickSignInBtn} />
        <Button label="sign up" onClick={onClickSignUpBtn} />
      </div>
    </div>
  );
});
