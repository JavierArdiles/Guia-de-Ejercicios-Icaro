const getUsers = require('./read');

const pais = (country) => {
    
    switch(country.toLowerCase()){
        case 'argentina':
            console.log('¡Qué quilombo!');
            break;
        case 'chile':
            console.log('Al tiro');
            break;
        case 'uruguay':
            console.log('Los de afuera son de palo');
            break;
        default:
            console.log('Aguante ' + country + '!!!');
            console.log('Los paises deben ser Argentina, Chile o Uruguay');
            return;
    }
    let users = getUsers();
    let usersfiltered = users.filter(user => user.country.toLowerCase() == country.toLowerCase());
    return usersfiltered;

}

module.exports = pais;