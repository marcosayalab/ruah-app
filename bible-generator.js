import fs from 'fs';
import https from 'https';

// --- CONFIGURACIÓN MAESTRA ---
const OUTPUT_DIR = './src/data';

// Trabajos que tiene que hacer el script
const JOBS = [
  {
    language: "ESPAÑOL",
    versionApi: "RV1960", 
    filename: "./src/data/gospels-es.json", // Nombre específico para Español
    books: [
      { id: 40, name: "Mateo",  chapters: 28 },
      { id: 41, name: "Marcos", chapters: 16 },
      { id: 42, name: "Lucas",  chapters: 24 },
      { id: 43, name: "Juan",   chapters: 21 }
    ]
  },
  {
    language: "ENGLISH",
    versionApi: "KJV", 
    filename: "./src/data/gospels-en.json", // Nombre específico para Inglés
    books: [
      { id: 40, name: "Matthew",  chapters: 28 },
      { id: 41, name: "Mark",     chapters: 16 },
      { id: 42, name: "Luke",     chapters: 24 },
      { id: 43, name: "John",     chapters: 21 }
    ]
  }
];

// Helper: Fetch a single chapter
const fetchChapter = (version, bookId, chapter) => {
  return new Promise((resolve, reject) => {
    // La URL es dinámica según la versión
    const url = `https://bolls.life/get-text/${version}/${bookId}/${chapter}/`;
    
    https.get(url, (res) => {
      let data = '';
      
      if (res.statusCode !== 200) {
        reject(new Error(`API Error ${res.statusCode}`));
        return;
      }

      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', (err) => reject(err));
  });
};

const generateBible = async () => {
  // Aseguramos que existe la carpeta
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log("🚀 Starting Unified Bible Generator...");
  console.log("📡 Connecting to Bolls.life API...");

  // --- BUCLE PRINCIPAL: Recorremos cada idioma ---
  for (const job of JOBS) {
    console.log(`\n=========================================`);
    console.log(`🌍 Generating version: ${job.language} (${job.versionApi})`);
    console.log(`=========================================`);

    const gospelsData = [];
    let globalId = 1;

    for (const book of job.books) {
      process.stdout.write(`📘 ${book.name}: `); 
      
      for (let i = 1; i <= book.chapters; i++) {
        try {
          const versesArray = await fetchChapter(job.versionApi, book.id, i);
          
          // --- LIMPIEZA DE TEXTO (CRUCIAL) ---
          const chapterText = versesArray
              .map(v => v.text)
              .join(" ")
              .replace(/<[^>]*>/g, '') // 1. Elimina etiquetas HTML (<br>, <i>)
              .replace(/[0-9]/g, '');  // 2. Elimina números (Crucial para la versión KJV Inglés)

          gospelsData.push({
            id: globalId++,
            book: book.name,
            chapter: i,
            citation: `${book.name} ${i}`,
            text: chapterText,
            verse_count: versesArray.length
          });
          
          process.stdout.write(`.`); 

        } catch (error) {
          console.error(`\n❌ Error ${book.name} ${i}:`, error.message);
        }
      }
      process.stdout.write(` ✅\n`); 
    }

    // Guardar archivo
    fs.writeFileSync(job.filename, JSON.stringify(gospelsData, null, 2));
    console.log(`💾 Saved: ${job.filename}`);
  }

  console.log("\n✨ ALL DONE! Both languages generated successfully.");
};

generateBible();