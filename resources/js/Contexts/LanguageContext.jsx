import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../lib/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    // Initialize state from localStorage or default to 'id'
    const [language, setLanguageState] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("language");
            return saved === "en" ? "en" : "id";
        }
        return "id";
    });

    const setLanguage = (lang) => {
        setLanguageState(lang);
        if (typeof window !== "undefined") {
            localStorage.setItem("language", lang);
        }
    };

    const t = (key) => {
        const keys = key.split(".");
        let value = translations[language];

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
