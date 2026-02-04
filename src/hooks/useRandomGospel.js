import { useState, useCallback } from 'react';
import gospelsEs from '../data/gospels-es.json';
import gospelsEn from '../data/gospels-en.json';

const gospelsData = {
  es: gospelsEs,
  en: gospelsEn,
};

export function useRandomGospel(initialLang = 'es') {
  const [language, setLanguage] = useState(initialLang);
  const [currentGospel, setCurrentGospel] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const getRandomGospel = useCallback(() => {
    const gospels = gospelsData[language];
    const randomIndex = Math.floor(Math.random() * gospels.length);
    setCurrentGospel(gospels[randomIndex]);
    setIsRevealed(true);
  }, [language]);

  const changeLanguage = useCallback((newLang) => {
    setLanguage(newLang);
    // Si hay un capítulo mostrado, actualizar al mismo capítulo en el nuevo idioma
    if (currentGospel) {
      const newGospels = gospelsData[newLang];
      const sameChapter = newGospels.find(g => g.id === currentGospel.id);
      if (sameChapter) {
        setCurrentGospel(sameChapter);
      }
    }
  }, [currentGospel]);

  const reset = useCallback(() => {
    setCurrentGospel(null);
    setIsRevealed(false);
  }, []);

  return {
    language,
    currentGospel,
    isRevealed,
    getRandomGospel,
    changeLanguage,
    reset,
  };
}
