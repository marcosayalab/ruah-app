# Ruah 🌬️

> "El viento de donde quiere sopla, y oyes su sonido; mas ni sabes de dónde viene, ni a dónde va: así es todo aquel que es nacido del Espíritu." — Juan 3:8

[![🇺🇸 Read in English](https://img.shields.io/badge/Lang-English-blue)](README.md)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Data](https://img.shields.io/badge/Data-Static%20JSON-orange)

**Ruah** es una aplicación web minimalista diseñada para ofrecer un momento de reflexión a través de la lectura aleatoria de los Evangelios. Inspirada en la práctica católica de la *Lectio Divina* y en la Providencia, permite al usuario "abrir el libro" por una página al azar para encontrar una palabra de orientación.

## 📍 Uso en Comunidad

Esta aplicación es utilizada comunmente y con cariño en la **Parroquia de Santa María y San Sebastián** de **Estepa (Sevilla, Andalucía)**. Sirve como una herramienta digital de acompañamiento para la oración y el discernimiento de sus feligreses.

## 📖 Arquitectura y Funcionamiento

A diferencia de las apps tradicionales que hacen peticiones a internet cada vez que pulsas un botón, **Ruah** está diseñada para ser **instantánea y funcionar offline**.

1.  **Generación de Datos Híbrida:** Utilizamos un script propio (`bible-generator.js`) que combina dos métodos:
    * **Español:** Extrae el texto localmente usando la librería NPM `biblia-de-jerusalen`.
    * **Inglés:** Conecta con la API externa de Bolls.life.
2.  **Base de Datos Estática:** El script compila los 89 capítulos de los Evangelios en archivos JSON locales (`gospels-es.json` y `gospels-en.json`).
3.  **Renderizado Instantáneo:** React carga estos datos en memoria. Al desplegar en Vercel, la app funciona como un sitio estático con una "mini base de datos" integrada, garantizando cero tiempos de carga.

## 🛠️ El Script Generador

El proyecto incluye el archivo `bible-generator.js`. Solo es necesario ejecutarlo una vez para crear los archivos de datos.

* **Fuente Español:** Utilizamos el paquete [biblia-de-jerusalen](https://www.jsdelivr.com/package/npm/biblia-de-jerusalen) para garantizar la fidelidad litúrgica y pastoral.
* **Fuente Inglés:** Bolls.life API (KJV).
* **Robustez:** Al usar una librería local para el español, garantizamos que el texto católico siempre esté disponible, independientemente de la conexión a internet.

## 🌍 Idiomas Disponibles

Ruah es una aplicación bilingüe diseñada para la comunidad católica. Actualmente soporta:

* **Español:** **Biblia de Jerusalén (1976)**. Seleccionada por su belleza literaria y su fidelidad al texto católico.
* **Inglés:** King James Version (KJV).

El cambio de idioma es instantáneo y se gestiona cargando el archivo JSON correspondiente.

## 📜 Fuente Bíblica y Derechos

Este proyecto tiene **fines educativos, pastorales y sin ánimo de lucro**.

* **Texto en Español:** Obtenido a través de la librería NPM `biblia-de-jerusalen`. Puedes consultar los detalles del paquete aquí: [biblia-de-jerusalen en jsDelivr](https://www.jsdelivr.com/package/npm/biblia-de-jerusalen). Los derechos de la traducción *Biblia de Jerusalén* pertenecen a sus respectivos titulares (Desclée de Brouwer). Usamos este recurso estrictamente para facilitar el acceso a los Evangelios en la oración personal.
* **Texto en Inglés:** KJV (Dominio Público).

## 🚀 Cómo empezar

1.  **Clona el repositorio**
    ```bash
    git clone [https://github.com/tu-usuario/ruah-app.git](https://github.com/tu-usuario/ruah-app.git)
    cd ruah-app
    ```

2.  **Instala las dependencias**
    Esto instalará React, Vite y la librería de la Biblia automáticamente.
    ```bash
    npm install
    ```
    *Nota: Si necesitas instalar la librería bíblica por separado, el comando es: `npm install biblia-de-jerusalen`*

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