import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../../components/header";
import { setFocusParagraph } from "../../redux/document-slice";

import styles from "./default-authed-page.module.scss";

export default function DefaultAuthedPage() {
  const dispatch = useDispatch();

  const onClickPage = useCallback(() => {
    dispatch(setFocusParagraph(null));
  }, [dispatch]);

  const onKeyDownEscape = useCallback(
    ({ code }: React.KeyboardEvent<HTMLElement>) => {
      if (code === "Escape") onClickPage();
    },
    [dispatch],
  );

  return (
    <div
      className={styles.defaultAuthedPage}
      onClick={onClickPage}
      onKeyDown={onKeyDownEscape}
      tabIndex={0}
    >
      <Header />
      <div className={styles.defaultAuthedPageContent}>
        <Outlet />
      </div>
    </div>
  );
}
