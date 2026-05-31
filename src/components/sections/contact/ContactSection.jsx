import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import { Button, Section } from "../../ui";
import { RECAPTCHA_SITE_KEY } from "../../../env";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const isValidEmail = (value) => EMAIL_REGEX.test(value.trim());

const ContactSection = () => {
  const { t } = useTranslation();
  const recaptchaRef = useRef(null);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value) => {
    if (!value.trim()) {
      return t("contact.form.emailRequired");
    }
    if (!isValidEmail(value)) {
      return t("contact.form.emailInvalid");
    }
    return "";
  };

  const handleEmailBlur = (event) => {
    setEmailError(validateEmail(event.target.value));
  };

  const handleEmailChange = (event) => {
    if (emailError) {
      setEmailError(validateEmail(event.target.value));
    }
  };

  const handleSubmit = (event) => {
    const error = validateEmail(event.target.email.value);
    if (error) {
      event.preventDefault();
      setEmailError(error);
      event.target.email.focus();
    }
  };

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
            onSubmit={handleSubmit}
            noValidate
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
                  className={`form-input${emailError ? " form-input--error" : ""}`}
                  required
                  autoComplete="email"
                  aria-invalid={emailError ? "true" : "false"}
                  aria-describedby={emailError ? "email-error" : undefined}
                  onBlur={handleEmailBlur}
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <p id="email-error" className="form-error" role="alert">
                    {emailError}
                  </p>
                )}
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
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
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
