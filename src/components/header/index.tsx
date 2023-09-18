import { memo } from 'react';
import { useSelector } from 'react-redux';

import { userFromUserReducerSelector } from '../../redux/reducers/selectors';
import styles from './header.module.css'

export const Header = memo(() => {

    const user = useSelector(userFromUserReducerSelector);

    return (
        <div className={styles.header}>
            <div className={styles.header__user_info}>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
            </div>
        </div>
    )
});