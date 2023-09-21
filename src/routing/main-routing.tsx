import { lazy, StrictMode, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { IUser } from "../interfaces";

const AuthPage = lazy(() => import("../pages/auth-page"));
const SignInPage = lazy(() => import("../pages/sign-in-page"));
const SignUpPage = lazy(() => import("../pages/sign-up-page"));
const DefaultAuthedPage = lazy(() => import("../pages/default-authed-page"));
const DocumentListPage = lazy(() => import("../pages/document-list-page"));
const DocumentPage = lazy(() => import("../pages/document-page"));

const authRouter = [
  {
    path: "*",
    element: <DefaultAuthedPage />,
    children: [
      {
        path: "",
        element: <DocumentListPage />,
      },
      {
        path: ":id",
        element: <DocumentPage />,
      },
      {
        path: "*",
        element: <DocumentListPage />,
      },
    ],
  },
];

const unAuthRouter = [
  {
    path: "*",
    element: <AuthPage />,
    children: [
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "*",
        element: <SignInPage />,
      },
    ],
  },
];

export function MainRouter({ user }: { user?: IUser }) {
  return (
    <StrictMode>
      <Suspense fallback={"Load..."}>
        <RouterProvider
          router={createBrowserRouter(user ? authRouter : unAuthRouter)}
        />
      </Suspense>
    </StrictMode>
  );
}
