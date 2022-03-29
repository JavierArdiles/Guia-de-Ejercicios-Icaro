const getUsers = require('./read');
const writeList = require('./write');

const editUser = (usernameOrEmail, name, lastname, age, country, email, username, userActive, games) => {
    // Traigo la lista entera de usuarios
    let users = getUsers();

    // Busco dentro de la lista al usuario que quiero editar
    let userFound = users.find(user => user.username == usernameOrEmail || user.email == usernameOrEmail);

    // Si el usuario buscado no existe, mando por consola el mejsaje de error
    if (!userFound) {
        console.log('El usuario buscado no existe.');
    }
    
    // De lo contrario:
    else {
        // Recorro la lista buscando al usuario deseado
        let usersEdited = users.map(user => {

            // Si el primer parámetro coincide con el nombre de usuario o el mail del usuario donde estoy parado:
            if (user.username == usernameOrEmail || user.email == usernameOrEmail) {
                // Si recibí el parámetro name, le asigno ese valor a la propiedad name del usuario donde estoy parado
                if(name) user.name = name;
                // Lo mismo con el resto de los parámetros
                if(lastname) user.lastname = lastname;
                if(age) user.age = age;
                if(country) user.country = country;
                if(email) user.email = email;
                // Para mostrar el operador ternario:
                user.username = username ? username : user.username;
                user.userActive = userActive == null ? user.userActive : userActive ? true : false;
                user.games = games ? games : user.games;
            }
            // Si el primer parámetro coincide con el nombre de usuario o el mail del usuario donde estoy parado,
            // las modificaciones ya van a estar hechas gracias a las líneas de arriba,
            // de lo contrario, simplemente devuelvo el usuario donde estoy parado sin modificarlo
            return user;
        });

        // Habiendo modificado la lista (en realidad solo modifiqué un usuario de la lista),
        // reescribo la lista actual con la nueva y mando por consola el mensaje de éxito
        writeList(usersEdited);
        console.log('Usuario actualizado con éxito!');
    }
}

module.exports = editUser;