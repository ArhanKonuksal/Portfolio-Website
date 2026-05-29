import { m } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Section } from "../../ui";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeroSection = () => {
  const { t } = useTranslation();
  const words = t("hero.headline").split(" ");

  return (
    <Section className="hero-section">
      <div className="hero-gradient-blob" aria-hidden="true" />
      <div
        className="hero-gradient-blob hero-gradient-blob--secondary"
        aria-hidden="true"
      />

      <m.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="hero-headline">
          <m.span className="hero-greeting" variants={itemVariants}>
            {t("hero.greeting")}
          </m.span>
          {words.map((word, i) => (
            <m.span
              key={i}
              className="hero-word"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: 0.5 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </m.span>
          ))}
        </h1>

        <m.p className="hero-subheadline" variants={itemVariants}>
          {t("hero.subheadline")}
        </m.p>

        <m.div className="hero-actions" variants={itemVariants}>
          <Button as={Link} to="/projects" variant="primary" size="lg">
            {t("hero.cta.primary")}
          </Button>
          <Button as={Link} to="/contact" variant="ghost" size="lg">
            {t("hero.cta.secondary")}
          </Button>
        </m.div>
      </m.div>

      <m.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        aria-hidden="true"
      >
        <span className="hero-scroll-text">{t("home.scrollDown")}</span>
        <m.div
          className="hero-scroll-line"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </m.div>
    </Section>
  );
};

export default HeroSection;
