import React, { createContext, useContext, useState, ReactNode } from "react";
import { HEADER, HEADER_PT, EXPERIENCE, EXPERIENCE_PT, PROJECTS, PROJECTS_PT, STACKS, STACKS_PT } from "../constants/index";

// Tipagem para os textos
interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
  texts: {
    HEADER: typeof HEADER;
    EXPERIENCE: typeof EXPERIENCE;
    PROJECTS: typeof PROJECTS;
    STACKS: typeof STACKS;
  };
}

// Criando o contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "pt" : "en"));
  };

  const texts = {
    HEADER: language === "en" ? HEADER : HEADER_PT,
    EXPERIENCE: language === "en" ? EXPERIENCE : EXPERIENCE_PT,
    PROJECTS: language === "en" ? PROJECTS : PROJECTS_PT,
    STACKS: language === "en" ? STACKS : STACKS_PT
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
