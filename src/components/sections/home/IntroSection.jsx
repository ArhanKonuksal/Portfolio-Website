import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Section, Button, CountUp } from "../../ui";

const stats = [
  { value: 10, suffix: "+", labelKey: "home.stats.projects" },
  { value: 15, suffix: "+", labelKey: "home.stats.technologies" },
  { value: 2, suffix: "", labelKey: "home.stats.languages" },
];

const IntroSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <Section id="about" className="intro-section">
      <div ref={sectionRef}>
        <motion.div
          className="intro-content"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">{t("home.about.sectionTitle")}</h2>
          <p className="intro-text">{t("intro.text")}</p>
        </motion.div>

        <motion.div
          className="intro-stats"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelKey}
              className="intro-stat"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.4 + i * 0.15,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="intro-stat-number">
                <CountUp to={stat.value} duration={2} delay={0.6 + i * 0.2} />
                {stat.suffix}
              </span>
              <span className="intro-stat-label">{t(stat.labelKey)}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="intro-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button as={Link} to="/about" variant="ghost">
            {t("home.about.cta")}
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default IntroSection;
