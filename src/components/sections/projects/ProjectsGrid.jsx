/**
 * Projects Grid Section
 * Full projects listing
 */

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Badge, Card, Section } from "../../ui";
import { projects } from "../../../data";
import { GitHubIcon, ExternalLinkIcon } from "../../icons";

const ProjectCard = ({ project, t, onClick }) => (
  <Card
    className="project-card project-card-clickable"
    onClick={onClick}
    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } }}
    role="button"
    tabIndex={0}
    aria-label={t(project.titleKey)}
  >
    <Card.Title>{t(project.titleKey)}</Card.Title>
    <Card.Description>{t(project.descriptionKey)}</Card.Description>
    <Card.Footer>
      <div className="project-stack">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <div className="project-links">
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link" 
            aria-label={`View ${t(project.titleKey)} on GitHub`}
            onClick={(e) => e.stopPropagation()}
          >
            <GitHubIcon />
          </a>
        )}
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link" 
            aria-label={`View ${t(project.titleKey)} live demo`}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    </Card.Footer>
  </Card>
);

const ProjectsGrid = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Section className="page-header-section">
        <Section.Header>
          <Section.Title>{t("projects.pageTitle")}</Section.Title>
          <Section.Subtitle>{t("projects.pageSubtitle")}</Section.Subtitle>
        </Section.Header>
      </Section>

      <Section>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              t={t}
              onClick={() => navigate(`/projects/${project.id}`)}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default ProjectsGrid;
