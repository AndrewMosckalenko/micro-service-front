import { lazy, StrictMode } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"

const AuthPage = lazy(() => import('../pages/auth-page'));
const SignInPage = lazy(() => import('../pages/sign-in-page'));
const SignUpPage = lazy(() => import('../pages/sign-up-page'));

const authRouter = [
    {
        path: '/',
        element: (<SignInPage />),
    }
];

const unAuthRouter = [
    {
        path: '/',
        element: (<AuthPage />),
        children: [
            {
                path: 'sign-in',
                element: (<SignInPage />),
            },
            {
                path: 'sign-up',
                element: (<SignUpPage />),
            },
            {
                path: '*',
                element: (<Navigate to="sign-in"/>),
            },
        ],
    }
]

export function MainRouter({ token }: {token: string}) {
    return (
        <StrictMode>
            <RouterProvider router={createBrowserRouter(token ? authRouter : unAuthRouter)}/> 
        </StrictMode>
    )
}