/**
 * Projects Page
 * Thin page - only composes sections
 */

import { useTranslation } from "react-i18next";
import { SEO } from "../components/common";
import { ProjectsGrid } from "../components/sections/projects";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={`Arhan Konuksal | ${t("nav.projects")}`}
        description={t("projects.pageDescription")}
        path="/projects"
      />

      <ProjectsGrid />
    </>
  );
};

export default Projects;
