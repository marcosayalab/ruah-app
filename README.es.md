# Ruah 🌬️

> "El viento de donde quiere sopla, y oyes su sonido; mas ni sabes de dónde viene, ni á dónde vaya: así es todo aquel que es nacido del Espíritu." — Juan 3:8

[![🇺🇸 Read in English](https://img.shields.io/badge/Lang-English-blue)](README.md)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Data](https://img.shields.io/badge/Data-Static%20JSON-orange)

**Ruah** es una aplicación web minimalista diseñada para ofrecer un momento de reflexión a través de la lectura aleatoria de los Evangelios. Inspirada en la práctica de la *Lectio Divina* y en la Providencia, permite al usuario "abrir el libro" por una página al azar.

## 📖 Arquitectura y Funcionamiento

A diferencia de las apps tradicionales que hacen peticiones a internet cada vez que pulsas un botón, **Ruah** está diseñada para ser **instantánea y funcionar offline**.

1.  **Generación de Datos:** Utilizamos un script propio (`bible-generator.js`) que conecta con la API externa solo durante la fase de desarrollo.
2.  **Base de Datos Estática:** El script descarga y compila los 89 capítulos de los Evangelios en archivos JSON locales (`gospels.json` y `gospels-en.json`).
3.  **Renderizado Instantáneo:** React carga estos datos en memoria. Al desplegar en Vercel, la app funciona como un sitio estático con una "mini base de datos" integrada, garantizando cero tiempos de carga.

## 🛠️ El Script Generador

El proyecto incluye el archivo `bible-generator.js`. Solo es necesario ejecutarlo una vez para crear los archivos de datos.

* **API Utilizada:** [Bolls.life](https://bolls.life/) (API bíblica open-source).
* **Nota Técnica:** Al ejecutar el script, es posible que veas advertencias de conexión o tiempos de espera si la API está lenta. Sin embargo, el script es robusto: si los archivos `.json` aparecen en `src/data`, la operación fue un éxito.

## 🌍 Idiomas Disponibles

Ruah es una aplicación bilingüe. Actualmente soporta:
* **Español:** Versión Reina-Valera (RV).
* **Inglés:** King James Version (KJV).

El cambio de idioma es instantáneo y se gestiona cargando el archivo JSON correspondiente.

## 📜 Fuente Bíblica y Derechos

Este proyecto tiene **fines educativos y sin ánimo de lucro**.
* El texto en inglés (KJV) es de Dominio Público.
* El texto en español es provisto a través de la API de [Bolls.life](https://bolls.life/). Los derechos de las traducciones específicas pertenecen a sus respectivos titulares.

## 🚀 Cómo empezar

1.  **Clona el repositorio**
    ```bash
    git clone [https://github.com/tu-usuario/ruah-app.git](https://github.com/tu-usuario/ruah-app.git)
    cd ruah-app
    ```

2.  **Instala las dependencias**
    ```bash
    npm install
    ```

3.  **Genera los Datos**
    Si no tienes los archivos en `src/data`, ejecútalo:
    ```bash
    node bible-generator.js
    ```

4.  **Ejecuta la App**
    ```bash
    npm run dev
    ```

## 📄 Licencia

El código de este proyecto está bajo la Licencia MIT.