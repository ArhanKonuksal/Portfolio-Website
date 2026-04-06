import { useTranslation } from "react-i18next";
import { SEO } from "../components/common";
import { AboutSection } from "../components/sections/about";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={`Arhan Konuksal | ${t("nav.about")}`}
        description={t("about.pageDescription")}
        path="/about"
      />

      <AboutSection />
    </>
  );
};

export default About;
