import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SEO } from "../components/common";
import { Section, Badge, Button } from "../components/ui";
import { getBlogById } from "../data";

const formatDate = (dateString, locale) => {
  const date = new Date(dateString);
  const localeMap = {
    en: "en-US",
    tr: "tr-TR",
    nl: "nl-NL"
  };
  return date.toLocaleDateString(localeMap[locale] || "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogContent = ({ contentKey, t }) => {
  const content = t(contentKey, { returnObjects: true });
  
  if (!Array.isArray(content)) {
    return <p className="blog-content-paragraph">{content}</p>;
  }

  return (
    <div className="blog-content">
      {content.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 key={index} className="blog-content-heading">
              {block.text}
            </h2>
          );
        }
        if (block.type === "paragraph") {
          return (
            <p key={index} className="blog-content-paragraph">
              {block.text}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
};

const BlogDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const blog = getBlogById(id);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <>
      <SEO
        title={`Arhan Konuksal | ${t(blog.titleKey)}`}
        description={t(blog.subtitleKey)}
        path={`/blogs/${blog.id}`}
      />

      <Section className="blog-detail-section">
        <article className="blog-article">
          {/* Back Link */}
          <Link to="/blogs" className="blog-back-link">
            ← {t("blogs.backToBlogs")}
          </Link>

          {/* Header */}
          <header className="blog-header">
            <div className="blog-meta">
              <time dateTime={blog.date}>{formatDate(blog.date, i18n.language)}</time>
              <span className="blog-read-time">{blog.readTime} {t("blogs.minRead")}</span>
            </div>
            <h1 className="blog-title">{t(blog.titleKey)}</h1>
            <p className="blog-subtitle">{t(blog.subtitleKey)}</p>
            <div className="blog-tags">
              {blog.tags.map((tag) => (
                <Badge key={tag}>{t(`blogs.tags.${tag}`)}</Badge>
              ))}
            </div>
          </header>

          {/* Content */}
          <BlogContent contentKey={blog.contentKey} t={t} />

          {/* Footer */}
          <footer className="blog-footer">
            <Button as={Link} to="/blogs" variant="ghost">
              ← {t("blogs.backToBlogs")}
            </Button>
          </footer>
        </article>
      </Section>
    </>
  );
};

export default BlogDetail;
