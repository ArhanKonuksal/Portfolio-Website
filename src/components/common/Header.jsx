import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "../ui";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNav from "./MobileNav";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { path: "/about", label: t("nav.about") },
    { path: "/projects", label: t("nav.projects") },
    { path: "/contact", label: t("nav.contact") },
    { path: "/blogs", label: t("nav.blogs") }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="header-logo">
            <span className="header-logo-first">Arhan</span>{" "}
            <span className="header-logo-accent">Konuksal</span>
          </Link>
          
          <nav className="header-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                {...(location.pathname === item.path ? { "aria-current": "page" } : {})}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Desktop Actions */}
          <div className="header-actions">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
