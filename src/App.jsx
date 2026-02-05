import { useState } from 'react';
import { useRandomGospel } from './hooks/useRandomGospel';
import './App.css';
import logoSvg from '/ruah.svg';
import parishLogo from './assets/logo-parroquia-SantaMariaYSanSebastianEstepa.jpg';
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
      creditsAuthor: 'Desarrollado por',
      creditsParish: 'Parroquia',
      creditsFacebook: 'Síguenos en Facebook'
    },
    en: {
      tagline: '"The wind blows where it wishes, and you hear its sound, but you do not know where it comes from or where it goes."',
      taglineRef: '— John 3:8',
      button: 'Open the Book',
      newReading: 'New Reading',
      footer: 'A moment of reflection with the Gospels',
      creditsAuthor: 'Developed by',
      creditsParish: 'Parish',
      creditsFacebook: 'Follow us on Facebook'
    },
  };

  const t = texts[language];

  const authorName = 'Marcos Ángel Ayala Blanco';
  const authorGithub = 'https://github.com/marcosayalab';
  const parish = {
    name: 'Parroquia de Santa María y San Sebastián, Estepa, Sevilla',
    url: 'https://www.archisevillasiempreadelante.org/santa-maria-y-san-sebastian-de-estepa-parroquia-alumbrada-por-el-espiritu-santo/',
    facebook: 'https://www.facebook.com/p/Parroquia-de-Santa-Maria-y-San-Sebasti%C3%A1n-de-Estepa-100064536586298/?locale=es_ES'
  };

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
        <div className="footer-content">
          <p className="footer-parish" style={{fontWeight: 700, fontSize: '1.03rem', margin: 0, textAlign: 'center'}}>
            <a href={parish.url} target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none', fontWeight: 700}}>{parish.name}</a>
            {" \u00A0•\u00A0 "}
            <a href={parish.facebook} target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>{t.creditsFacebook}</a>
          </p>

          <div className="parish-logo-wrap" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '6px 0'}}>
            <img src={parishLogo} alt="Parish logo" className="parish-logo" />
          </div>

          <p className="credits" style={{fontSize: '0.85rem', marginTop: '0.25rem', marginBottom: 0, color: '#666'}}>
            {t.creditsAuthor}: <a href={authorGithub} target="_blank" rel="noreferrer" style={{color: 'inherit'}}>{authorName}</a>
          </p>
        </div>
      </footer>
      {showInfo && (
        <InfoPanel language={language} onClose={() => setShowInfo(false)} />
      )}
    </div>
  );
}

export default App;