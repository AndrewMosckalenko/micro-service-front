import { Outlet } from "react-router-dom";
import { Header } from "../../components";

import styles from './default-authed-page.module.css'

export default function DefaultAuthedPage() {

    return (
        <div className={styles.default_authed_page}>
            <Header />
            <div className={styles.default_authed_page__content}>
                <Outlet />
            </div>
        </div>
    )
}