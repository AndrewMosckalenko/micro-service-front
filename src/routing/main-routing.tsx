import { lazy, StrictMode, Suspense } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"

const AuthPage = lazy(() => import('../pages/auth-page'));
const SignInPage = lazy(() => import('../pages/sign-in-page'));
const SignUpPage = lazy(() => import('../pages/sign-up-page'));
const DefaultAuthedPage = lazy(() => import('../pages/default-authed-page'));
const DocumentListPage = lazy(() => import('../pages/document-list-page'))

const authRouter = [
    {
        path: '/',
        element: (<DefaultAuthedPage />),
        children: [
            {
                path: '',
                element: (<DocumentListPage />)
            },
            {
                path: '*',
                element: (<Navigate to=""/>),
            },
        ],
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
                path: '',
                element: (<Navigate to="sign-in"/>),
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
            <Suspense fallback={"Load..."}>
                <RouterProvider router={createBrowserRouter(token ? authRouter : unAuthRouter)}/> 
            </Suspense>
        </StrictMode>
    )
}