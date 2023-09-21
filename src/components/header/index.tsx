import { memo, useCallback } from "react";

import { useLogout } from "../../hooks";
import { useGetUserQuery } from "../../redux/api";

import logoutIcon from "../../assets/logout.png";
import returnIcon from '../../assets/return.png';

import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

export const Header = memo(() => {
  const { data: user } = useGetUserQuery({});
  const onClickLogout = useLogout();

  const navigate = useNavigate()

  const onClickReturn = useCallback(() => {
    navigate(-1);
  }, [navigate])

  return (
    <div className={styles.header}>
      <img
        src={returnIcon}
        alt="return"
        className={styles.header__logout}
        onClick={onClickReturn}
      />
      <div className={styles.header__right_side}>
        <div className={styles.header__user_info}>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </div>
        <img
          src={logoutIcon}
          alt="logout"
          className={styles.header__logout}
          onClick={onClickLogout}
        />
      </div>
    </div>
  );
});
