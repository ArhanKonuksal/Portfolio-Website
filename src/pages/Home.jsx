import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { SEO } from "../components/common";
import HeroSection from "../components/sections/home/HeroSection";

const HomeBelowFold = lazy(
  () => import("../components/sections/home/HomeBelowFold")
);

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

      <Suspense fallback={null}>
        <HomeBelowFold />
      </Suspense>
    </>
  );
};

export default Home;
