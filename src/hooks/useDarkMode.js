import { useState, useEffect, useCallback } from "react";

export const useDarkMode = () => {
  
  const getInitialTheme = () => {
    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    
    
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    
    return false;
  };

  const [isDark, setIsDark] = useState(getInitialTheme);

  
  const applyTheme = useCallback((dark) => {
    const theme = dark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = (e) => {
      
      const savedTheme = localStorage.getItem("theme");
      if (!savedTheme) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  
  useEffect(() => {
    applyTheme(isDark);
  }, [isDark, applyTheme]);

  
  const toggleDarkMode = useCallback(() => {
    setIsDark((prev) => {
      const newValue = !prev;
      localStorage.setItem("theme", newValue ? "dark" : "light");
      return newValue;
    });
  }, []);

  
  const setDarkMode = useCallback((dark) => {
    setIsDark(dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, []);

  
  const resetToSystem = useCallback(() => {
    localStorage.removeItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(systemPrefersDark);
  }, []);

  return {
    isDark,
    toggleDarkMode,
    setDarkMode,
    resetToSystem,
  };
};

export default useDarkMode;
