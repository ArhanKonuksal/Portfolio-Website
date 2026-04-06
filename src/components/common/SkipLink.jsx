import { useTranslation } from "react-i18next";

const SkipLink = () => {
  const { t } = useTranslation();

  return (
    <a href="#main-content" className="skip-link">
      {t("accessibility.skipToContent", "Skip to main content")}
    </a>
  );
};

export default SkipLink;
