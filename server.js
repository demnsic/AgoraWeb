const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir archivos estáticos (HTML, CSS, imágenes, JavaScript)
app.use(express.static(path.join(__dirname)));

// Ruta principal para entregar el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor local
app.listen(PORT, () => {
    console.log(`Servidor de Ágora corriendo localmente en: http://localhost:${PORT}`);
});