import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section, Badge, Button } from "../../ui";
import { getFeaturedBlogs } from "../../../data";

const formatDate = (dateString, locale) => {
  const date = new Date(dateString);
  const localeMap = { en: "en-US", tr: "tr-TR", nl: "nl-NL" };
  return date.toLocaleDateString(localeMap[locale] || "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogsPreviewSection = () => {
  const { t, i18n } = useTranslation();
  const blogs = getFeaturedBlogs();
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <Section className="home-blogs-section">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Section.Header>
          <Section.Title>{t("home.blogs.sectionTitle")}</Section.Title>
          <Section.Subtitle>{t("home.blogs.subtitle")}</Section.Subtitle>
        </Section.Header>
      </motion.div>

      <div className="home-blogs-grid">
        {blogs.map((blog, i) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              delay: i * 0.15,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link to={`/blogs/${blog.id}`} className="blog-card">
              <article>
                <div className="blog-card-meta">
                  <time dateTime={blog.date}>
                    {formatDate(blog.date, i18n.language)}
                  </time>
                  <span className="blog-card-read-time">
                    {blog.readTime} {t("blogs.minRead")}
                  </span>
                </div>
                <h3 className="blog-card-title">{t(blog.titleKey)}</h3>
                <p className="blog-card-subtitle">{t(blog.subtitleKey)}</p>
                <div className="blog-card-tags">
                  {blog.tags.map((tag) => (
                    <Badge key={tag}>{t(`blogs.tags.${tag}`)}</Badge>
                  ))}
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="projects-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Button variant="ghost" as={Link} to="/blogs">
          {t("home.blogs.cta")}
        </Button>
      </motion.div>
    </Section>
  );
};

export default BlogsPreviewSection;
