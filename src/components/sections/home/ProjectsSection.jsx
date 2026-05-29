import { m, useInView } from "motion/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";
import { Button, Badge, Card, Section } from "../../ui";
import { getFeaturedProjects } from "../../../data";
import { GitHubIcon, ExternalLinkIcon } from "../../icons";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ProjectCard = ({ project, t, onClick, index }) => (
  <m.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
  >
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
  </m.div>
);

const ProjectsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const featuredProjects = getFeaturedProjects();
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <Section id="projects" className="projects-section">
      <m.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Section.Header>
          <Section.Title>{t("projects.sectionTitle")}</Section.Title>
        </Section.Header>
      </m.div>

      <div className="projects-grid">
        {featuredProjects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            t={t}
            index={i}
            onClick={() => navigate(`/projects/${project.id}`)}
          />
        ))}
      </div>

      <m.div
        className="projects-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Button variant="ghost" as={Link} to="/projects">
          {t("projects.cta")}
        </Button>
      </m.div>
    </Section>
  );
};

export default ProjectsSection;
