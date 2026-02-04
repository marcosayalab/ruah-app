import React from 'react';

export default function InfoPanel({ language = 'es', onClose }) {
  const content = {
    es: {
      title: 'Sobre Ruah',
      sections: [
        {
          heading: null,
          paragraphs: [
            'Ruah te ofrece un momento breve de lectura y reflexión: al pulsar "Abrir el Libro" la aplicación abre, de forma instantánea, un capítulo aleatorio de los Evangelios para ayudarte a escuchar lo que Dios pueda decirte en ese momento.'
          ]
        },
        {
          heading: 'Origen',
          paragraphs: [
            'Ruah nace de la antigua práctica de buscar respuestas en el azar de las Escrituras. En momentos de incertidumbre, permite "abrir el libro" y encontrar esa palabra precisa que traiga luz y serenidad a tu inquietud. Es decir, consiste en conocer o escuchar qué te está queriendo decir Dios en ese preciso momento a través de las Escrituras.',
            'Ruah (רוח) significa "viento" o "espíritu" en hebreo: el símbolo del Espíritu que trae una palabra cuando más la necesitas.'
          ]
        },
        {
          heading: 'Cómo usarlo',
          paragraphs: [
            'Pulsa el botón principal "Abrir el Libro" y la app mostrará un capítulo al azar. Lee despacio, reflexiona unos minutos y pregúntate: ¿qué me está diciendo esto hoy? Repite si quieres una nueva lectura.',
          ]
        },
        {
          heading: 'Propósito cristiano',
          paragraphs: [
            'Ruah es una herramienta con raíz cristiana: no pretende sustituir la dirección espiritual o la lectura bíblica guiada, sino ser un recurso sencillo para detenerse, escuchar y orar. Está pensada para inspirar y acompañar momentos de discernimiento.'
          ]
        },
        {
          heading: 'Invitación',
          paragraphs: [
            'Si esta pequeña práctica te ayuda, compártela con otros. Si buscas más apoyo espiritual, considera hablar con un párroco o acompañante espiritual de confianza.'
          ]
        }
      ]
    },
    en: {
      title: 'About Ruah',
      sections: [
        {
          heading: null,
          paragraphs: [
            'Ruah offers a short moment of reading and reflection: when you press "Open the Book" the app instantly opens a random chapter from the Gospels to help you listen to what God may be saying at that moment.'
          ]
        },
        {
          heading: 'Origin',
          paragraphs: [
            'The idea came from a parish priest who, in moments of uncertainty or stress, would open the Bible at random to find a word that guided him. Ruah (רוח) means "wind" or "spirit" in Hebrew—the image of the Spirit bringing a word just when it is needed.'
          ]
        },
        {
          heading: 'How to use',
          paragraphs: [
            'Press the main "Open the Book" button and the app will display a random chapter. Read slowly, reflect for a few minutes and ask: what is this saying to me today? Press again for a new reading if desired.'
          ]
        },
        {
          heading: 'Christian purpose',
          paragraphs: [
            'Ruah is rooted in a Christian vision: it is not a substitute for spiritual direction or guided Bible study but a simple tool to pause, listen and pray. It aims to inspire and accompany moments of discernment.'
          ]
        },
        {
          heading: 'An invitation',
          paragraphs: [
            'If this practice helps you, share it with others. If you seek deeper support, consider speaking with a trusted parish priest or spiritual director.'
          ]
        }
      ]
    }
  };

  const { title, sections } = content[language] || content.es;

  return (
    <aside className="info-panel" role="dialog" aria-label={title}>
      <div className="info-card">
        <header className="info-card-header">
          <h2>{title}</h2>
          <button className="info-close" onClick={onClose} aria-label="Close">×</button>
        </header>
        <div className="info-card-body">
          {sections.map((sec, i) => (
            <section key={i} className="info-section">
              {sec.heading && <h3>{sec.heading}</h3>}
              {sec.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
            </section>
          ))}
        </div>
      </div>
    </aside>
  );
}
