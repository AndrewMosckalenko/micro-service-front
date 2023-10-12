import { memo } from "react";
import { Link } from "react-router-dom";

import { useLogout } from "../../hooks";
import { useGetUserQuery } from "../../redux/api";
import { LogoutIcon, ReturnIcon, HomeIcon } from "../svg-icons";
import { DocumentHeader } from "../document-header";

import styles from "./header.module.scss";

export const Header = memo(() => {
  const { data: user } = useGetUserQuery({});
  const onClickLogout = useLogout();

  return (
    <div className={styles.header}>
      <div className={styles.header__left_side}>
        <Link to={-1}><ReturnIcon className={styles.header__logout}/></Link>
        <Link to='/'><HomeIcon className={styles.header__logout}/></Link>
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
