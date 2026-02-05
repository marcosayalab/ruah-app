# Ruah 🌬️

> "The wind blows where it wishes, and you hear its sound, but you do not know where it comes from or where it goes. So it is with everyone who is born of the Spirit." — John 3:8

[![🇪🇸 Leer en Español](https://img.shields.io/badge/Lang-Español-red)](README.es.md)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Data](https://img.shields.io/badge/Data-Static%20JSON-orange)

**Ruah** is a minimalist web application designed to offer a moment of reflection through the random reading of the Gospels. Inspired by the concept of Divine Providence and the Catholic tradition of *Lectio Divina*, it allows the user to "open the book" at a random page to receive a message.

## 📍 Community Usage

This application is commonly used and cherished by the community of the **Parish of Santa María y San Sebastián** in **Estepa (Seville, Andalusia)**. It serves as a digital companion for moments of prayer and discernment within the parish community.

## 📖 Architecture & How it Works

Unlike traditional apps that fetch data from an API every time a user clicks a button (causing loading times), **Ruah** is built for **speed and offline capability**.

1.  **Hybrid Data Generation:** We use a custom Node.js script (`bible-generator.js`) that combines two methods:
    * **Spanish:** Extracts text locally from the `biblia-de-jerusalen` NPM library.
    * **English:** Fetches text from the external Bolls.life API.
2.  **Static Database:** The script compiles the 89 chapters of the Gospels into local JSON files (`gospels-es.json` and `gospels-en.json`).
3.  **Instant Rendering:** React loads this data into memory. When deployed to Vercel/Netlify, the app acts as a Static Site with a pre-built "mini-database," ensuring zero network latency for the user.

## 🛠️ The Generator Script

The project includes `bible-generator.js`. You typically only need to run this once to build the JSON files.

* **Spanish Source:** We utilize the [biblia-de-jerusalen](https://www.jsdelivr.com/package/npm/biblia-de-jerusalen) package to ensure fidelity to the Catholic liturgy.
* **English Source:** [Bolls.life API](https://bolls.life/) (KJV).
* **Note:** The script is robust; it generates the static files needed for the app to run completely offline.

## 🌍 Multilingual Support

Ruah is fully bilingual. It currently supports:

* **Spanish:** **Jerusalem Bible (1976)**. Chosen for its poetic quality and acceptance in the Catholic world.
* **English:** King James Version (KJV).

The user can toggle between languages instantly without reloading the page.

## 📜 Disclaimer & Copyright

This project is for **educational, non-profit, and pastoral purposes**.

* **Spanish Text:** The text is sourced via the `biblia-de-jerusalen` NPM package. You can view the package details here: [biblia-de-jerusalen on jsDelivr](https://www.jsdelivr.com/package/npm/biblia-de-jerusalen). All rights regarding the Jerusalem Bible translation belong to their respective owners (Desclée de Brouwer). We use this resource strictly to facilitate access to the Gospels for personal prayer.
* **English Text:** The KJV text is in the Public Domain.

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/ruah-app.git](https://github.com/your-username/ruah-app.git)
    cd ruah-app
    ```

2.  **Install dependencies**
    This will install React, Vite, and the Bible library automatically.
    ```bash
    npm install
    ```
    *Note: If you want to install the Bible library manually/separately, you can run: `npm install biblia-de-jerusalen`*

3.  **Check Database**
    Ensure `src/data/gospels-es.json` exists. If not, generate the data:
    ```bash
    node bible-generator.js
    ```

4.  **Run the App**
    ```bash
    npm run dev
    ```

## 📄 License

This project is licensed under the MIT License.