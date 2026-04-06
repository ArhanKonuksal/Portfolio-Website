import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Section } from "../../ui";
import { galleryImages } from "../../../data";

const CircularGallery = lazy(() => 
  import("../../ui/CircularGallery/CircularGallery")
);

// Gallery loading placeholder
const GalleryLoader = () => (
  <div className="about-gallery-loader">
    <div className="gallery-loader-spinner" />
  </div>
);

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Section className="page-header-section">
        <Section.Header>
          <Section.Title>{t("about.pageTitle")}</Section.Title>
        </Section.Header>
      </Section>

      {/* Circular Gallery - Full width */}
      <Section className="about-gallery-section">
        <div className="about-gallery-container">
          <Suspense fallback={<GalleryLoader />}>
            <CircularGallery
              items={galleryImages}
              bend={3}
              textColor="var(--color-text-secondary)"
              borderRadius={0.05}
              font="500 16px DM Sans"
            />
          </Suspense>
        </div>
      </Section>

      {/* Bio Content - Centered */}
      <Section className="about-bio-section">
        <div className="about-content about-content-centered">
          <p className="about-text">{t("about.bio1")}</p>
          <p className="about-text">{t("about.bio2")}</p>
          <p className="about-text">{t("about.bio3")}</p>
        </div>
      </Section>
    </>
  );
};

export default AboutSection;
