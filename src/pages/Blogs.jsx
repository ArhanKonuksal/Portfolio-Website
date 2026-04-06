import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SEO } from "../components/common";
import { Section, Badge } from "../components/ui";
import { getAllBlogs } from "../data";

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

const BlogCard = ({ blog, t, locale }) => (
  <Link to={`/blogs/${blog.id}`} className="blog-card">
    <article>
      <div className="blog-card-meta">
        <time dateTime={blog.date}>{formatDate(blog.date, locale)}</time>
        <span className="blog-card-read-time">{blog.readTime} {t("blogs.minRead")}</span>
      </div>
      <h2 className="blog-card-title">{t(blog.titleKey)}</h2>
      <p className="blog-card-subtitle">{t(blog.subtitleKey)}</p>
      <div className="blog-card-tags">
        {blog.tags.map((tag) => (
          <Badge key={tag}>{t(`blogs.tags.${tag}`)}</Badge>
        ))}
      </div>
    </article>
  </Link>
);

const Blogs = () => {
  const { t, i18n } = useTranslation();
  const blogs = getAllBlogs();

  return (
    <>
      <SEO
        title={`Arhan Konuksal | ${t("nav.blogs")}`}
        description={t("blogs.pageDescription")}
        path="/blogs"
      />

      <Section className="page-header-section">
        <Section.Header>
          <Section.Title>{t("blogs.pageTitle")}</Section.Title>
          <Section.Subtitle>{t("blogs.pageSubtitle")}</Section.Subtitle>
        </Section.Header>
      </Section>

      <Section>
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} t={t} locale={i18n.language} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Blogs;
