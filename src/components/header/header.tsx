import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useLogout } from "../../hooks";
import { useGetUserQuery } from "../../redux/api";
import { LogoutIcon, ReturnIcon } from "../svg-icons";
import { DocumentHeader } from "../document-header";

import styles from "./header.module.css";

export const Header = memo(() => {
  const { data: user } = useGetUserQuery({});
  const onClickLogout = useLogout();

  const navigate = useNavigate();

  const onClickReturn = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className={styles.header}>
      <ReturnIcon className={styles.header__logout} onClick={onClickReturn} />
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
