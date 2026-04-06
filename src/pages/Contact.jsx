import { useTranslation } from "react-i18next";
import { SEO } from "../components/common";
import { ContactSection } from "../components/sections/contact";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={`Arhan Konuksal | ${t("nav.contact")}`}
        description={t("contact.pageDescription")}
        path="/contact"
      />

      <ContactSection />
    </>
  );
};

export default Contact;
