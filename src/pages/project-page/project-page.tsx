import { Outlet } from "react-router-dom";
import { ProjectNavMenu } from "../../components/project-nav-manu";

export default function ProjectPage() {
  return (
    <div>
      <ProjectNavMenu />
      <Outlet />
    </div>
  );
}
