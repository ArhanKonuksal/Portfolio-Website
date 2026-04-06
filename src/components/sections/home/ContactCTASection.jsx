import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Section } from "../../ui";

const ContactCTASection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section className="cta-section cta-section--enhanced">
      <div
        className="cta-gradient-orb cta-gradient-orb--left"
        aria-hidden="true"
      />
      <div
        className="cta-gradient-orb cta-gradient-orb--right"
        aria-hidden="true"
      />

      <motion.div
        ref={ref}
        className="cta-content"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("home.contact.title")}
        </motion.h2>
        <motion.p
          className="cta-text"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {t("cta.text")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button as={Link} to="/contact" variant="primary" size="lg">
            {t("cta.button")}
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ContactCTASection;
