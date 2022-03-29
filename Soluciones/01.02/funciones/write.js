const fs = require('fs');

const writeList = (usuarios) => {
    fs.writeFileSync('./usuariosData.json', JSON.stringify(usuarios, null, 2));
}

module.exports = writeList;