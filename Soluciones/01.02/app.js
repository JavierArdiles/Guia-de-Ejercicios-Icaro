const alMenos13 = require('./funciones/alMenos3');
const deleteUser = require('./funciones/delete');
const editUser = require('./funciones/edit');
const gmailfortnite = require('./funciones/gmailFortnite');
const menores18 = require('./funciones/menores18');
const pais = require('./funciones/pais');

console.log('alMenos13():');

console.log(alMenos13());

console.log('=====================================================================');

console.log('deleteUser("primer_mail_de_la_historia@hotmail.com"):');

deleteUser('primer_mail_de_la_historia@hotmail.com');

editUser('LganteKeloke420', null, null, 20);

console.log('gmailFortnite()');

console.log(gmailfortnite());

console.log('=====================================================================');

console.log('menores18()');

console.log(menores18());

console.log('=====================================================================');

console.log('pais("argentina")');

console.log(pais('argentina'));


