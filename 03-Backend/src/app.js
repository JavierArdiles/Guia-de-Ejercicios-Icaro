const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

app.listen(PORT, () => console.log('listening on port ', PORT));

app.get('/', (_req, res) => {
    res.send('¡Hola! Bienvenido al puerto ' + PORT);
})

app.get('/home', (_req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

app.get('/productos', (_req, res) => {
    res.sendFile(path.join(__dirname, 'views/productos.html'));
})
