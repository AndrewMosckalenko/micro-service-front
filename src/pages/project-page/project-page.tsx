import { useParams } from "react-router-dom";
import { lazy } from "react";

import { ProjectNavMenu } from "../../components/project-nav-manu";
import NotFoundPage from "../not-found-page";

const SummaryPage = lazy(() => import("../summary-page"));
const DocumentListPage = lazy(() => import("../document-list-page"));

export default function ProjectPage() {
  const { location } = useParams();

  const page = () => {
    switch (location) {
      case "document":
        return <DocumentListPage />;
      case "summary":
        return <SummaryPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div>
      <ProjectNavMenu />
      {page()}
    </div>
  );
}
