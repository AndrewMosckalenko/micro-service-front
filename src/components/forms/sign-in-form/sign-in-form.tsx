import { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button, Input } from "../../ui-components";
import { useSignInMutation } from "../../../redux/api";
import { addTokenToLocalStorage } from "../../../utils";
import { setToken } from "../../../redux/auth-slice";

import styles from "./sign-in-form.module.scss";

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

  const onChangeEmail = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(target.value);
    },
    [setEmail],
  );

  const onChangePassword = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(target.value);
    },
    [setPassword],
  );

  return (
    <div className={styles.signInForm}>
      <h1 className={styles.signInFormTitle}>Sign in</h1>
      <Input value={email} placeholder="email" onChange={onChangeEmail} />
      <Input
        value={password}
        placeholder="password"
        onChange={onChangePassword}
      />
      <div className={styles.signUpFormBtns}>
        <Button onClick={onClickSignInBtn}>sign in</Button>
        <Button onClick={onClickSignUpBtn}>sign up</Button>
      </div>
    </div>
  );
});
