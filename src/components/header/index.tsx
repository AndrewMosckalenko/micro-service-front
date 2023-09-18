import { memo } from "react";
import { useSelector } from "react-redux";

import { userFromUserReducerSelector } from "../../redux/reducers/selectors";

import logoutIcon from '../../assets/logout.png'
import styles from "./header.module.css";
import { useLogout } from "../../hooks";

export const Header = memo(() => {

  const user = useSelector(userFromUserReducerSelector);
  const onClickLogout = useLogout();

  return (
    <div className={styles.header}>
      <div className={styles.header__user_info}>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
      </div>
      <img src={logoutIcon} alt="logout" className={styles.header__logout} onClick={onClickLogout}/>
    </div>
  );
});
