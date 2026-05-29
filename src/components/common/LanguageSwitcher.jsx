import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { loadLanguage } from "../../i18n";
import { ChevronDownIcon } from "../icons";

const languages = [
  { code: "en", label: "EN" },
  { code: "nl", label: "NL" },
  { code: "tr", label: "TR" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const handleLanguageChange = async (code) => {
    await loadLanguage(code);
    await i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button 
        className="language-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        type="button"
      >
        {currentLang.label}
        <ChevronDownIcon 
          style={{ 
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease"
          }}
        />
      </button>
      
      {isOpen && (
        <ul className="language-switcher-dropdown" role="listbox">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className={`language-option ${lang.code === i18n.language ? "active" : ""}`}
                onClick={() => handleLanguageChange(lang.code)}
                role="option"
                aria-selected={lang.code === i18n.language}
                type="button"
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
