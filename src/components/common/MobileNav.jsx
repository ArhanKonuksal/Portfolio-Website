/**
 * Mobile Navigation Component
 * Hamburger menu for mobile devices
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MenuIcon, CloseIcon } from "../icons";
import { ThemeToggle } from "../ui";
import LanguageSwitcher from "./LanguageSwitcher";

const MobileNav = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/projects", label: t("nav.projects") },
    { path: "/blogs", label: t("nav.blogs") },
    { path: "/contact", label: t("nav.contact") },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="mobile-nav">
      <button
        className="mobile-nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        type="button"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {isOpen && (
        <>
          <div 
            className="mobile-nav-overlay" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <nav className="mobile-nav-menu" role="navigation">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`mobile-nav-link ${location.pathname === item.path ? "active" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mobile-nav-actions">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default MobileNav;
