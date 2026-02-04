# Ruah 🌬️

> "The wind blows where it wishes, and you hear its sound, but you do not know where it comes from or where it goes. So it is with everyone who is born of the Spirit." — John 3:8

[![🇪🇸 Leer en Español](https://img.shields.io/badge/Lang-Español-red)](README.es.md)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Data](https://img.shields.io/badge/Data-Static%20JSON-orange)

**Ruah** is a minimalist web application designed to offer a moment of reflection through the random reading of the Gospels. Inspired by the concept of Divine Providence, it allows the user to "open the book" at a random page to receive a message.

## 📖 Architecture & How it Works

Unlike traditional apps that fetch data from an API every time a user clicks a button (causing loading times), **Ruah** is built for **speed and offline capability**.

1.  **Data Generation:** We use a custom Node.js script (`bible-generator.js`) that fetches the Gospels from an external API during the development phase.
2.  **Static Database:** The script compiles the 89 chapters of the Gospels into local JSON files (`gospels.json` and `gospels-en.json`).
3.  **Instant Rendering:** React loads this data into memory. When deployed to Vercel/Netlify, the app acts as a Static Site with a pre-built "mini-database," ensuring zero network latency for the user.

## 🛠️ The Generator Script

The project includes `bible-generator.js`. You typically only need to run this once to build the JSON files.

* **API Used:** [Bolls.life](https://bolls.life/) (Open source Bible API).
* **Note on Execution:** When running the script, you might see connection warnings or timeouts depending on the API load. However, the script is robust: as long as the `.json` files are created in `src/data`, the process is successful.

## 🌍 Multilingual Support

Ruah is fully bilingual. It currently supports:
* **Spanish:** Reina-Valera Version (RV).
* **English:** King James Version (KJV).

The user can toggle between languages instantly without reloading the page.

## 📜 Disclaimer & Copyright

This project is for **educational and non-profit purposes**.
* The English text (KJV) is in the Public Domain.
* The Spanish text is provided via the [Bolls.life API](https://bolls.life/). All rights regarding specific translations belong to their respective owners.

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/ruah-app.git](https://github.com/your-username/ruah-app.git)
    cd ruah-app
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Check Database**
    Ensure `src/data/gospels.json` exists. If not, generate the data:
    ```bash
    node bible-generator.js
    ```

4.  **Run the App**
    ```bash
    npm run dev
    ```

## 📄 License

This project is licensed under the MIT License.