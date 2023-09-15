import { useState, memo, useCallback } from "react"
import { AuthButton, AuthInput } from ".."

import styles from './sign-in-form.module.css'


export const SignInForm = memo(() => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onCLickSignInBtn = useCallback(() => {
        // @todo
    }, [])

    return (
        <div className={styles.sign_in_form}>
            <h1 className={styles.sign_in_form__title}>Sign in</h1>
            <AuthInput value={email} hint="email" onChange={setEmail}/>
            <AuthInput value={password} hint="password" onChange={setPassword}/>
            <AuthButton label="sign in" onClick={onCLickSignInBtn}/>
        </div>
    )
})