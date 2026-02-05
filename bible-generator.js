import fs from 'fs';
import https from 'https';
// Import the library you just installed
import { Bible } from 'biblia-de-jerusalen'; 

// --- CONFIGURATION ---
const OUTPUT_DIR = './src/data';

const JOBS = [
  {
    language: "ESPAÑOL (Biblia de Jerusalén)",
    mode: "NPM_LIBRARY", // New mode to use the library
    filename: "./src/data/gospels-es.json",
    // Exact names to search for in the library
    targetBooks: ["Mateo", "Marcos", "Lucas", "Juan"] 
  },
  {
    language: "ENGLISH (King James)",
    mode: "API",
    versionApi: "KJV",
    filename: "./src/data/gospels-en.json",
    books: [
      { id: 40, name: "Matthew",  chapters: 28 },
      { id: 41, name: "Mark",     chapters: 16 },
      { id: 42, name: "Luke",     chapters: 24 },
      { id: 43, name: "John",     chapters: 21 }
    ]
  }
];

// --- 1. FUNCTION FOR API (English KJV) ---
const fetchChapterFromApi = (version, bookId, chapter) => {
  return new Promise((resolve, reject) => {
    const url = `https://bolls.life/get-text/${version}/${bookId}/${chapter}/`;
    https.get(url, (res) => {
      let data = '';
      if (res.statusCode !== 200) { reject(new Error(`API Error ${res.statusCode}`)); return; }
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', (err) => reject(err));
  });
};

// --- 2. FUNCTION FOR NPM LIBRARY (Catholic Spanish) ---
const processNpmLibrary = (targetBooks) => {
    console.log("   📚 Loading 'biblia-de-jerusalen' library...");
    
    // Instantiate the Bible from the library
    const bibleInstance = new Bible();

    const gospels = [];
    let globalId = 1;

    console.log(`   🔍 Searching for ${targetBooks.length} Gospel books...`);

    // Use getBook() method to fetch each target book directly
    targetBooks.forEach(bookName => {
        const bookObj = bibleInstance.getBook(bookName);
        
        if (!bookObj) {
            console.warn(`   ⚠️ Book "${bookName}" not found in library`);
            return;
        }

        console.log(`   📖 Processing: ${bookName} (${bookObj.ctd_chapters} chapters)`);
        
        // Iterate through the chapters array
        bookObj.chapters.forEach((chapterObj) => {
            const chapterNum = parseInt(chapterObj.chapter, 10);
            
            // verses is an object with verse numbers as keys: { "1": "text...", "2": "text...", ... }
            const versesObj = chapterObj.verses;
            const verseNumbers = Object.keys(versesObj).sort((a, b) => parseInt(a) - parseInt(b));
            
            // Join all verses into a single text
            const fullText = verseNumbers
                .map(vNum => versesObj[vNum])
                .join(" ");

            gospels.push({
                id: globalId++,
                book: bookName,
                chapter: chapterNum,
                citation: `${bookName} ${chapterNum}`,
                text: fullText.trim(),
                verse_count: verseNumbers.length
            });
        });
    });

    return gospels;
};

// --- MAIN EXECUTION ---
const generateBible = async () => {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log("🚀 Starting RUAH Generator (NPM Library + API)...");

  for (const job of JOBS) {
    console.log(`\n------------------------------------------------`);
    console.log(`🌍 Generating: ${job.language}`);
    
    let gospelsData = [];

    // NPM LIBRARY MODE
    if (job.mode === "NPM_LIBRARY") {
        try {
            gospelsData = processNpmLibrary(job.targetBooks);
             if (gospelsData.length === 0) {
              console.warn("⚠️ WARNING: No chapters were found. Check the book names.");
            } else {
              console.log(`   ✅ Success! ${gospelsData.length} Catholic chapters processed.`);
            }
        } catch (error) {
            console.error("   ❌ LIBRARY ERROR:", error.message);
        }
    } 
    
    // API MODE
    else if (job.mode === "API") {
        let globalId = 1;
        for (const book of job.books) {
            process.stdout.write(`   📘 ${book.name}: `);
            for (let i = 1; i <= book.chapters; i++) {
                try {
                    const versesArray = await fetchChapterFromApi(job.versionApi, book.id, i);
                    
                    // Specific cleanup for KJV (remove Strong numbers and HTML)
                    const chapterText = versesArray
                        .map(v => v.text)
                        .join(" ")
                        .replace(/<[^>]*>/g, '') 
                        .replace(/[0-9]/g, '');

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
                    process.stdout.write(`x`);
                }
            }
            process.stdout.write(` ✅\n`);
        }
    }

    // Save final file
    if (gospelsData.length > 0) {
                fs.writeFileSync(job.filename, JSON.stringify(gospelsData, null, 2));
        console.log(`   💾 File saved: ${job.filename}`);
    }
  }

  console.log("\n✨ PROCESS COMPLETED. Your Catholic database is ready.");
};

generateBible();