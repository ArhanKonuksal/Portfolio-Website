import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SEO } from "../components/common";
import { Section, Badge, Button } from "../components/ui";
import { getProjectById } from "../data";
import { GitHubIcon, ExternalLinkIcon } from "../components/icons";

const ProjectDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const project = getProjectById(id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <SEO
        title={`Arhan Konuksal | ${t(project.titleKey)}`}
        description={t(project.descriptionKey)}
        path={`/projects/${project.id}`}
      />

      <Section className="project-detail-section">
        <article className="project-article">
          <Link to="/projects" className="project-back-link">
            ← {t("projects.detail.backToProjects", "Back to projects")}
          </Link>

          <header className="project-header">
            <h1 className="project-title">{t(project.titleKey)}</h1>
            <p className="project-subtitle">{t(project.descriptionKey)}</p>

            {project.image && (
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="project-image"
                  loading="lazy"
                />
              </div>
            )}

            <div className="project-meta">
              <h2 className="project-meta-title">
                {t("projects.detail.techStackTitle", "Tech stack")}
              </h2>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </header>

          {(project.githubUrl || project.liveUrl) && (
            <section className="project-links-section">
              <h2 className="project-meta-title">
                {t("projects.detail.linksTitle", "Links")}
              </h2>
              <div className="project-links-detail">
                {project.githubUrl && (
                  <Button
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="ghost"
                  >
                    <GitHubIcon />
                    <span>
                      {t(
                        "projects.detail.githubLabel",
                        "View source on GitHub"
                      )}
                    </span>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    as="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                  >
                    <ExternalLinkIcon />
                    <span>
                      {t(
                        "projects.detail.liveDemoLabel",
                        "View live demo"
                      )}
                    </span>
                  </Button>
                )}
              </div>
            </section>
          )}

          <footer className="project-footer">
            <Button as={Link} to="/projects" variant="ghost">
              ← {t("projects.detail.backToProjects", "Back to projects")}
            </Button>
          </footer>
        </article>
      </Section>
    </>
  );
};

export default ProjectDetail;

