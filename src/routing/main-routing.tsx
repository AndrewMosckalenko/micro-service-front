import { lazy, StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const AuthPage = lazy(() => import('../pages/auth-page'));
const SignInPage = lazy(() => import('../pages/sign-in-page'));

const authRouter = [
    {
        path: '/',
        element: (<SignInPage />),
    }
];

const unAuthRouter = [
    {
        path: '/auth',
        element: (<AuthPage />),
        children: [
            {
            path: 'sign-in',
            element: (<SignInPage />),
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