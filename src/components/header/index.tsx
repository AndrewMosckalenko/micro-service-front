import { memo } from 'react'
import styles from './header.module.css'

export const Header = memo(() => {

    return (
        <div className={styles.header}>
            <div className={styles.header__user_info}>

            </div>
        </div>
    )
});