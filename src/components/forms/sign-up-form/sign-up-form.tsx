import { useNavigate } from "react-router-dom";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { useSignUpMutation } from "../../../redux/api";
import { Button, Input } from "../../ui-components";
import { addTokenToLocalStorage } from "../../../utils";
import { setToken } from "../../../redux/auth-slice";

import styles from "./sign-up-form.module.css";

export const SignUpForm = memo(() => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpRequest] = useSignUpMutation();

  const onChangeEmail = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setUser((prev) => ({ ...prev, email: target.value }));
    },
    [setUser],
  );

  const onChangeName = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setUser((prev) => ({ ...prev, name: target.value }));
    },
    [setUser],
  );

  const onChangePassword = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setUser((prev) => ({ ...prev, password: target.value }));
    },
    [setUser],
  );

  const onClickSignUpButton = useCallback(() => {
    signUpRequest(user).then((res) => {
      addTokenToLocalStorage(res.data?.access_token);
      dispatch(setToken(res.data?.access_token));
    });
  }, [signUpRequest, user, dispatch]);

  const onClickSignInButton = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <div className={styles.sign_up_form}>
      <h1 className={styles.sign_up_form__title}>Sign up</h1>
      <Input value={user.email} onChange={onChangeEmail} placeholder="email" />
      <Input value={user.name} onChange={onChangeName} placeholder="name" />
      <Input
        value={user.password}
        onChange={onChangePassword}
        placeholder="password"
      />
      <div className={styles.sign_up_form__btns}>
        <Button onClick={onClickSignUpButton}>sign up</Button>
        <Button onClick={onClickSignInButton}>sign in</Button>
      </div>
    </div>
  );
});
