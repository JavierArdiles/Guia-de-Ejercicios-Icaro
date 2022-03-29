const getUsers = require('./read');

const gmailFortnite = () => {
    let users = getUsers();
    let usersFiltered = users.filter(user => user.email.includes('gmail') && user.games.includes('Fortnite'));
    return usersFiltered;
}

module.exports = gmailFortnite;



// Alternativa para no olvidar el uso del bucle for
// function gmailFortnite(){
//     let users = getUsers();
//     let usuarios = [];
//     for(let i = 0; i < users.length; i++){
//         if(users[i].email.includes('gmail') && users[i].games.includes('Fortnite')){
//             usuarios.push(users[i].username);
//         }
//     }
//     return usuarios;
// }