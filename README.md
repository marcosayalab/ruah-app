# Ruah 🌬️

> "The wind blows where it wishes, and you hear its sound, but you do not know where it comes from or where it goes. So it is with everyone who is born of the Spirit." — John 3:8

[![🇪🇸 Leer en Español](https://img.shields.io/badge/Lang-Español-red)](README_Spanish.md)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

**Ruah** is a minimalist web application designed to offer a moment of reflection through the random reading of the Gospels. Inspired by the ancient practice of *Lectio Divina* and the concept of serendipity—or Providence—it allows the user to "open the book" at a random page to receive a message.

## 📖 What is Ruah?

**Ruah** (רוּחַ) is a Hebrew word meaning "breath," "wind," or "spirit."

In the biblical context, it represents the creative power of God and the Holy Spirit. The app takes this concept to the digital realm: just as the wind blows where it wills, the application selects a chapter from the Gospels (Matthew, Mark, Luke, or John) completely at random. There is no algorithm based on preferences, only pure randomness, inviting the user to find meaning in the unexpected.

## ✨ Features

* **True Randomness:** Selects a chapter from the 4 Gospels (89 chapters total).
* **Instant Load:** Uses a local optimized JSON database (no API latency).
* **Zero Distractions:** Minimalist interface focused solely on the text.
* **Offline Ready:** Designed to work without an internet connection (Perfect for commuting or retreats).

## 📜 The Source: Reina Valera 1909

This project uses the text of the **Reina Valera 1909** Bible.

* **Why this version?** It is in the **Public Domain** worldwide.
* **The Beauty of the Text:** It retains a classic, solemn, and poetic Spanish style that invites reverence and deep reading, avoiding modern copyright restrictions.

## 🚀 Getting Started

Follow these steps to run Ruah on your local machine:

### Prerequisites
* Node.js (v14 or higher)
* npm

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/tu-usuario/ruah-app.git](https://github.com/tu-usuario/ruah-app.git)
    cd ruah-app
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Generate the Database** 🛠️
    *Crucial Step:* Run the included script to download and compile the Gospels into a local JSON file.
    ```bash
    node generar-biblia.js
    ```

4.  **Run the App**
    ```bash
    npm run dev
    ```
    Open your browser at `http://localhost:5173`

## 🔮 Roadmap & Ideas

* [ ] **PWA (Progressive Web App):** Make it installable on mobile phones.
* [ ] **Dark Mode:** For night reading.
* [ ] **"Share" Button:** Generate an image or text to share the chapter.
* [ ] **Lectio Divina Mode:** A guided timer for reading, meditation, and prayer.

## 🤝 Contributing

This is an open-source project. If you want to improve the code or suggest features, feel free to open a PR!

## 📄 License

This project is licensed under the [MIT License](LICENSE).
The Biblical text (RVR1909) is in the Public Domain.