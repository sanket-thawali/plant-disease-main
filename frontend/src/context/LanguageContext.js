import React, { createContext, useState } from 'react';
import axios from 'axios';

export const LanguageContext = createContext();

const supportedLanguages = {
  en: 'English',
  mr: 'Marathi',
  hi: 'Hindi',
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  // Function to translate text by calling backend API
  const translateText = async (text) => {
    if (language === 'en') {
      return text; // No translation needed for English
    }
    try {
      const response = await axios.post('/api/translation/translate', {
        text,
        targetLang: language,
      });
      return response.data.translatedText;
    } catch (error) {
      console.error('Translation API error:', error);
      return text; // Fallback to original text on error
    }
  };

  // Function to translate all keys in a text object
  const translateAll = async (texts) => {
    const translated = {};
    for (const key in texts) {
      translated[key] = await translateText(texts[key]);
    }
    setTranslations(translated);
  };

  // Provide language, setLanguage, translations, and translateText function
  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, translations, translateText, translateAll, supportedLanguages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
