# Ruah 🌬️

> "El viento de donde quiere sopla, y oyes su sonido; mas ni sabes de dónde viene, ni á dónde vaya: así es todo aquel que es nacido del Espíritu." — Juan 3:8

[![🇺🇸 Read in English](https://img.shields.io/badge/Lang-English-blue)](README.md)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

**Ruah** es una aplicación web minimalista diseñada para ofrecer un momento de reflexión a través de la lectura aleatoria de los Evangelios. Inspirada en la práctica de la *Lectio Divina* y en la Providencia, permite al usuario "abrir el libro" por una página al azar para recibir un mensaje.

## 📖 ¿Qué significa Ruah?

**Ruah** (רוּחַ) es una palabra hebrea que significa "aliento", "viento" o "espíritu".

En el contexto bíblico, representa el poder creativo de Dios y al Espíritu Santo. La aplicación lleva este concepto al mundo digital: igual que el viento sopla donde quiere, la aplicación selecciona un capítulo de los Evangelios (Mateo, Marcos, Lucas o Juan) de forma totalmente aleatoria. No hay algoritmos basados en tus gustos, solo aleatoriedad pura, invitando a encontrar sentido en lo inesperado.

## ✨ Características

* **Aleatoriedad Real:** Selecciona entre los 89 capítulos de los 4 Evangelios.
* **Carga Instantánea:** Utiliza una base de datos local JSON optimizada (sin latencia de APIs externas).
* **Cero Distracciones:** Interfaz minimalista centrada únicamente en la lectura.
* **Modo Offline:** Diseñada para funcionar sin conexión a internet (Ideal para el metro o retiros).

## 📜 La Fuente: Reina Valera 1909

Este proyecto utiliza el texto de la Biblia **Reina Valera 1909**.

* **¿Por qué esta versión?** Se encuentra en el **Dominio Público**.
* **Estilo:** Conserva un castellano clásico, solemne y poético ("vosotros", "haced") que invita a la reverencia y a una lectura profunda, respetando totalmente la legalidad y el software libre.

## 🚀 Cómo empezar

Sigue estos pasos para ejecutar Ruah en tu ordenador:

### Requisitos
* Node.js (v14 o superior)
* npm

### Instalación

1.  **Clona el repositorio**
    ```bash
    git clone [https://github.com/tu-usuario/ruah-app.git](https://github.com/tu-usuario/ruah-app.git)
    cd ruah-app
    ```

2.  **Instala las dependencias**
    ```bash
    npm install
    ```

3.  **Genera la Base de Datos** 🛠️
    *Paso crucial:* Ejecuta el script incluido para descargar y compilar los Evangelios en un archivo JSON local.
    ```bash
    node generar-biblia.js
    ```

4.  **Ejecuta la App**
    ```bash
    npm run dev
    ```
    Abre tu navegador en `http://localhost:5173`

## 🔮 Futuras Mejoras (Roadmap)

* [ ] **PWA (Progressive Web App):** Hacerla instalable en móviles como una app nativa.
* [ ] **Modo Oscuro:** Para lecturas nocturnas.
* [ ] **Botón Compartir:** Generar una imagen o texto para compartir la cita.
* [ ] **Modo Lectio Divina:** Un temporizador guiado para lectura, meditación y oración.

## 🤝 Contribuir

Este es un proyecto Open Source. Si eres desarrollador y quieres mejorar el código, ¡siéntete libre de abrir una PR!

## 📄 Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
El texto bíblico (RVR1909) es de Dominio Público.