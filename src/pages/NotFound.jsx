import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SEO } from "../components/common";
import { Button, Section, CountUp } from "../components/ui";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("notFound.pageTitle")}
        description={t("notFound.pageDescription")}
        path="/404"
      />

      <Section className="not-found-section">
        <div className="not-found-content">
          <span className="not-found-code">
            <CountUp from={0} to={404} duration={1.5} />
          </span>
          <h1 className="not-found-title">{t("notFound.title")}</h1>
          <p className="not-found-text">{t("notFound.text")}</p>
          <Button as={Link} to="/" variant="primary" size="lg">
            {t("notFound.backHome")}
          </Button>
        </div>
      </Section>
    </>
  );
};

export default NotFound;
