import { lazy } from "react";
import { useParams } from "react-router-dom";

const SummaryPage = lazy(() => import("../summary-page"));
const DocumentListPage = lazy(() => import("../document-list-page"));
const NotFoundPage = lazy(() => import("../not-found-page"));

export function ProjectPageSwitch() {
  const { location } = useParams();

  switch (location) {
    case "document":
      return <DocumentListPage />;
    case "summary":
      return <SummaryPage />;
    default:
      return <NotFoundPage />;
  }
}
