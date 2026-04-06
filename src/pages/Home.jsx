import { useTranslation } from "react-i18next";
import { SEO } from "../components/common";
import {
  HeroSection,
  IntroSection,
  ProjectsSection,
  StackSection,
  BlogsPreviewSection,
  ContactCTASection,
} from "../components/sections/home";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="Arhan Konuksal"
        description={t("meta.description")}
        path="/"
      />

      <HeroSection />
      <IntroSection />
      <ProjectsSection />
      <StackSection />
      <BlogsPreviewSection />
      <ContactCTASection />
    </>
  );
};

export default Home;
