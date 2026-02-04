import { useState } from 'react';
import { useRandomGospel } from './hooks/useRandomGospel';
import './App.css';
import logoSvg from '/ruah.svg';
import InfoPanel from './components/InfoPanel';

function App() {
  const {
    language,
    currentGospel,
    isRevealed,
    getRandomGospel,
    changeLanguage,
  } = useRandomGospel('es');

  const [showInfo, setShowInfo] = useState(false);

  const texts = {
    es: {
      tagline: '"El viento de donde quiere sopla, y oyes su sonido; mas ni sabes de dónde viene, ni a dónde va."',
      taglineRef: '— Juan 3:8',
      button: 'Abrir el Libro',
      newReading: 'Nueva Lectura',
      footer: 'Un momento de reflexión con los Evangelios',
    },
    en: {
      tagline: '"The wind blows where it wishes, and you hear its sound, but you do not know where it comes from or where it goes."',
      taglineRef: '— John 3:8',
      button: 'Open the Book',
      newReading: 'New Reading',
      footer: 'A moment of reflection with the Gospels',
    },
  };

  const t = texts[language];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1 className="logo">
          <img src={logoSvg} alt="Ruah" className="logo-img" />
          Ruah
        </h1>
        <div className="language-selector">
          <button
            className={`lang-btn ${language === 'es' ? 'active' : ''}`}
            onClick={() => changeLanguage('es')}
          >
            ES
          </button>
          <button
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
        </div>
        <button className="info-button" onClick={() => setShowInfo(true)} aria-label="About Ruah">i</button>
      </header>

      {/* Main Content */}
      <main className="main">
        {!isRevealed ? (
          <section className="intro">
            <blockquote className="tagline">
              <p>{t.tagline}</p>
              <cite>{t.taglineRef}</cite>
            </blockquote>
            <button className="action-btn" onClick={getRandomGospel}>
              <span className="btn-icon">📖</span>
              {t.button}
            </button>
          </section>
        ) : (
          <section className="gospel-section">
            <article className="gospel-card">
              <header className="gospel-header">
                <span className="gospel-book">{currentGospel.book}</span>
                <span className="gospel-chapter">{currentGospel.citation}</span>
              </header>
              <div className="gospel-text">
                <p>{currentGospel.text}</p>
              </div>
              <footer className="gospel-footer">
                <span className="verse-count">
                  {currentGospel.verse_count} {language === 'es' ? 'versículos' : 'verses'}
                </span>
              </footer>
            </article>
            <button className="action-btn secondary" onClick={getRandomGospel}>
              <span className="btn-icon">🕊️</span>
              {t.newReading}
            </button>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
      {showInfo && (
        <InfoPanel language={language} onClose={() => setShowInfo(false)} />
      )}
    </div>
  );
}

export default App;