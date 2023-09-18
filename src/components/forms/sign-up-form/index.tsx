import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback, useState, memo } from "react";

import { AuthButton, AuthInput } from "../..";
import styles from "./sign-up-form.module.css";
import { requestSignUpAction } from "../../../redux/actions";

export const SignUpForm = memo(() => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

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
    dispatch(requestSignUpAction(user.email, user.name, user.password));
  }, [dispatch, user]);

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
