import { useCallback } from "react";
import { AuthButton } from "../..";
import styles from "./error-form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setErrorMessageToErrorReducerAction } from "../../../redux/actions";
import { errorFromErrorReducerSelector } from "../../../redux/reducers/selectors";

export function ErrorForm() {
  const dispatch = useDispatch();
  const error = useSelector(errorFromErrorReducerSelector);

  const onCLickOkBtn = useCallback(() => {
    dispatch(setErrorMessageToErrorReducerAction(null));
  }, [dispatch]);

  if (error) {
    return (
      <div className={styles.error_form__wrapper}>
        <div className={styles.error_form}>
          <p>{error}</p>
          <AuthButton label="Ok" onClick={onCLickOkBtn} />
        </div>
      </div>
    );
  }

  return <></>;
}
