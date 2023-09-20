import { memo } from "react";

import { useLogout } from "../../hooks";
import { useGetUserQuery } from "../../redux/api";

import logoutIcon from "../../assets/logout.png";
import styles from "./header.module.css";

export const Header = memo(() => {
  const { data: user } = useGetUserQuery({});
  const onClickLogout = useLogout();

  return (
    <div className={styles.header}>
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
  );
});
