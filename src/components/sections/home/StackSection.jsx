import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Badge, Section } from "../../ui";
import { getStackCategories } from "../../../data";

const StackGroup = ({ labelKey, items, t, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="stack-group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="stack-group-title">{t(labelKey)}</h3>
      <div className="stack-group-items">
        {items.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: delay + 0.1 + i * 0.05,
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Badge>{item}</Badge>
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const StackSection = () => {
  const { t } = useTranslation();
  const categories = getStackCategories();
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <Section id="stack" className="stack-section">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Section.Header>
          <Section.Title>{t("stack.sectionTitle")}</Section.Title>
        </Section.Header>
      </motion.div>

      <div className="stack-grid">
        {categories.map(([key, { labelKey, items }], i) => (
          <StackGroup
            key={key}
            labelKey={labelKey}
            items={items}
            t={t}
            delay={i * 0.08}
          />
        ))}
      </div>
    </Section>
  );
};

export default StackSection;
