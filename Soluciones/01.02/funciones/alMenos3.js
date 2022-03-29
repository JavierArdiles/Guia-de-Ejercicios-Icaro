const getUsers = require('./read');

const alMenos3 = () => {
    let users = getUsers();
    let usersFiltered = users.filter(user => user.userActive && user.games.length >= 3);
    return usersFiltered;
}

module.exports = alMenos3;