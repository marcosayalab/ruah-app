import fs from 'fs';
import https from 'https';

// --- CONFIGURATION ---
const OUTPUT_FILE = './src/data/gospels.json';
const OUTPUT_DIR = './src/data';

// Bolls.life uses numerical IDs for books:
// 40: Mateo, 41: Marcos, 42: Lucas, 43: Juan
const booksConfig = [
  { id: 40, name: "Mateo",  chapters: 28 },
  { id: 41, name: "Marcos", chapters: 16 },
  { id: 42, name: "Lucas",  chapters: 24 },
  { id: 43, name: "Juan",   chapters: 21 }
];

// Helper: Fetch a single chapter from Bolls.life
const fetchChapter = (bookId, chapter) => {
  return new Promise((resolve, reject) => {
    // URL Structure: https://bolls.life/get-text/RV1960/BOOK_ID/CHAPTER/
    const url = `https://bolls.life/get-text/RV1960/${bookId}/${chapter}/`;
    
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
  // Ensure directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log("🚀 Starting generator using Bolls.life API...");
  console.log("📡 Connecting to server...");

  const gospelsData = [];
  let globalId = 1;

  for (const book of booksConfig) {
    console.log(`\n📘 Downloading: ${book.name}...`);
    
    for (let i = 1; i <= book.chapters; i++) {
      try {
        const versesArray = await fetchChapter(book.id, i);
        
        // Bolls API returns an array of objects: [{ text: "...", pk: ... }, ...]
        // We join the text fields.
        const chapterText = versesArray
            .map(v => v.text)
            .join(" ")
            .replace(/<[^>]*>/g, ''); // Clean any HTML tags just in case

        gospelsData.push({
          id: globalId++,
          book: book.name,
          chapter: i,
          citation: `${book.name} ${i}`,
          text: chapterText,
          verse_count: versesArray.length
        });
        
        // Small delay to be polite to the API server
        process.stdout.write(`   ✅ Ch. ${i} `); 

      } catch (error) {
        console.error(`   ❌ Error Ch ${i}:`, error.message);
      }
    }
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(gospelsData, null, 2));
  console.log("\n\n=========================================");
  console.log(`✨ SUCCESS! Database generated.`);
  console.log(`📂 File: ${OUTPUT_FILE}`);
  console.log(`🔢 Total chapters: ${gospelsData.length}`);
  console.log("=========================================");
};

generateBible();
