const getUsers = require('./read');

function menores18(){
    let users = getUsers();
    let menores = [];
    for(let i = 0; i < users.length; i++){
        if(users[i].age < 18){
            users[i].userActive = false;
            menores.push(users[i]);
        }
    }
    return menores;
}

module.exports = menores18;