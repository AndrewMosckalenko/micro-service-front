import { useNavigate } from "react-router-dom";
import { useCallback, useState, memo } from "react";
import { useDispatch } from "react-redux";

import { useSignUpMutation } from "../../../redux/api";
import { AuthButton, AuthInput } from "../..";
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
    (email: string) => {
      setUser((prev) => ({ ...prev, email }));
    },
    [setUser],
  );

  const onChangeName = useCallback(
    (name: string) => {
      setUser((prev) => ({ ...prev, name }));
    },
    [setUser],
  );

  const onChangePassword = useCallback(
    (password: string) => {
      setUser((prev) => ({ ...prev, password }));
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
      <AuthInput value={user.email} onChange={onChangeEmail} hint="email" />
      <AuthInput value={user.name} onChange={onChangeName} hint="name" />
      <AuthInput
        value={user.password}
        onChange={onChangePassword}
        hint="password"
      />
      <div className={styles.sign_up_form__btns}>
        <AuthButton label="sign up" onClick={onClickSignUpButton} />
        <AuthButton label="sign in" onClick={onClickSignInButton} />
      </div>
    </div>
  );
});
