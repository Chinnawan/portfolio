import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() =>
    document.documentElement.lang === "th" ? "th" : "en"
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* storage unavailable — ignore */
    }
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "th" : "en"));

  // t({ en: "...", th: "..." }) → string in the current language.
  // Plain strings pass through unchanged.
  const t = (value) =>
    value && typeof value === "object" && "en" in value ? value[lang] : value;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
