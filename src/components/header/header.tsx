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
      <div className={styles.headerLeftSide}>
        <Link to={-1}>
          <ReturnIcon className={styles.headerLogout} />
        </Link>
        <Link to="/">
          <HomeIcon className={styles.headerLogout} />
        </Link>
      </div>
      <DocumentHeader />
      <div className={styles.headerRightSide}>
        <div className={styles.headerUserInfo}>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </div>
        <LogoutIcon className={styles.headerLogout} onClick={onClickLogout} />
      </div>
    </div>
  );
});
