import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, Section } from "../../ui";
import { RECAPTCHA_SITE_KEY } from "../../../env";

const ContactSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const existingScript = document.querySelector(
      'script[src="https://www.google.com/recaptcha/api.js"]'
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Section className="page-header-section">
        <Section.Header centered>
          <Section.Title>{t("contact.pageTitle")}</Section.Title>
          <Section.Subtitle>{t("contact.pageSubtitle")}</Section.Subtitle>
        </Section.Header>
      </Section>

      <Section>
        <div className="contact-content">
          <form
            action="https://formspree.io/f/xqedpnpv"
            method="POST"
            className="contact-form"
          >
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="fullName" className="form-label">
                  {t("contact.form.fullNameLabel", "İsim Soy İsim")}
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  {t("contact.form.emailLabel", "Email")}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message" className="form-label">
                {t("contact.form.messageLabel", "Mesaj")}
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                rows="5"
                required
              />
            </div>

            <div className="form-recaptcha">
              <div
                className="g-recaptcha"
                data-sitekey={RECAPTCHA_SITE_KEY}
              />
            </div>

            <div className="form-actions">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="contact-submit-button"
              >
                {t("contact.form.submitLabel", "Gönder")}
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
};

export default ContactSection;
