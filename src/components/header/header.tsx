import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useLogout } from "../../hooks";
import { useGetUserQuery } from "../../redux/api";
import { LogoutIcon, ReturnIcon, HomeIcon } from "../svg-icons";
import { DocumentHeader } from "../document-header";

import styles from "./header.module.css";

export const Header = memo(() => {
  const { data: user } = useGetUserQuery({});
  const onClickLogout = useLogout();

  const navigate = useNavigate();

  const onClickReturn = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.header}>
      <div className={styles.header__left_side}>
        <ReturnIcon className={styles.header__logout} onClick={onClickReturn} />
        <HomeIcon className={styles.header__logout} onClick={onClickHome} />
      </div>
      <DocumentHeader />
      <div className={styles.header__right_side}>
        <div className={styles.header__user_info}>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </div>
        <LogoutIcon className={styles.header__logout} onClick={onClickLogout} />
      </div>
    </div>
  );
});
