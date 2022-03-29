const getUsers = require('./read');
const writeList = require('./write');

const deleteUser = (usernameOrEmail) => {
    let users = getUsers();
    let usersFiltered = users.filter(user => user.username != usernameOrEmail && user.email != usernameOrEmail);
    if(users.length == usersFiltered.length){
        console.log('No existe el usuario buscado.');
    }
    else{
        writeList(usersFiltered);
        console.log('Usuario eliminado con éxito.');
        console.log(getUsers());
    }

}

module.exports = deleteUser;