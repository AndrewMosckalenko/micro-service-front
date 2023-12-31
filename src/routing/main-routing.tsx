import { StrictMode, Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { IUser } from "../interfaces";
import { LoadPage } from "../pages/load-page";

const AuthPage = lazy(() => import("../pages/auth-page"));
const SignInPage = lazy(() => import("../pages/sign-in-page"));
const SignUpPage = lazy(() => import("../pages/sign-up-page"));
const DefaultAuthedPage = lazy(() => import("../pages/default-authed-page"));
const DocumentPage = lazy(() => import("../pages/document-page"));
const NotFoundPage = lazy(() => import("../pages/not-found-page"));
const ProjectListPage = lazy(() => import("../pages/projects-list-page"));
const ProjectPage = lazy(() => import("../pages/project-page"));

const authRouter = [
  {
    path: "/",
    element: <DefaultAuthedPage />,
    children: [
      {
        path: "",
        element: <ProjectListPage />,
      },
      {
        path: ":projectId/document/:id",
        element: <DocumentPage />,
      },
      {
        path: ":projectId/:location",
        element: <ProjectPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/document" />,
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
      <Suspense fallback={<LoadPage />}>
        <RouterProvider
          router={createBrowserRouter(user ? authRouter : unAuthRouter)}
        />
      </Suspense>
    </StrictMode>
  );
}
