import { useState } from "react";
import { useTranslation } from "react-i18next";
import { socials } from "../../data";
import { LinkedInIcon, GitHubIcon, EmailIcon } from "../icons";

const iconMap = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  email: EmailIcon,
};

const EMAIL_ADDRESS = "arhankonuksal@gmail.com";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [showCopied, setShowCopied] = useState(false);

  const handleEmailClick = async (e) => {
    e.preventDefault();
    
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      // Fallback: mailto açmayı dene
      window.location.href = `mailto:${EMAIL_ADDRESS}`;
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-copyright">
            © {currentYear} {t("footer.copyright")}
          </div>
          
          <div className="footer-links">
            {Object.entries(socials).map(([key, { url, label }]) => {
              const Icon = iconMap[key];
              
              // Email için özel handling
              if (key === "email") {
                return (
                  <button
                    key={key}
                    onClick={handleEmailClick}
                    className="footer-link"
                    aria-label={label}
                    type="button"
                  >
                    {Icon && <Icon />}
                  </button>
                );
              }
              
              return (
                <a 
                  key={key}
                  href={url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label={label}
                >
                  {Icon && <Icon />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Kopyalandı bildirimi */}
      {showCopied && (
        <div className="copy-toast" role="status" aria-live="polite">
          {t("footer.emailCopied")}
        </div>
      )}
    </footer>
  );
};

export default Footer;
