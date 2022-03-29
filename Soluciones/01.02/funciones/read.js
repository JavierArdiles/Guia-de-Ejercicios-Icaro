const fs = require('fs');

const readUsers = () => JSON.parse(fs.readFileSync('./usuariosData.json', 'utf-8')); // JSON.parse convierte de json a JavaScript

module.exports = readUsers;