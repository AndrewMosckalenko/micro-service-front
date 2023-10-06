import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../../components/header";
import { setFocusParagraph } from "../../redux/document-slice";

import styles from "./default-authed-page.module.css";

export default function DefaultAuthedPage() {
  const dispatch = useDispatch();

  const onClickPage = useCallback(() => {
    dispatch(setFocusParagraph(null));
  }, [dispatch]);

  return (
    <div className={styles.default_authed_page} onClick={onClickPage}>
      <Header />
      <div className={styles.default_authed_page__content}>
        <Outlet />
      </div>
    </div>
  );
}
