<h1>Introducción a la programación 02</h1>

Contamos con una lista de usuarios de una página de videojuegos. Crear, en archivos separados, las siguientes funciones, exportarlas y, desde el archivo app.js, invocarlas y ver sus resultados en consola. Sobreescribir la lista las veces que sea necesario.
````
    1- Crear una función que devuelva la lista completa de usuarios con todos sus datos, dentro de un array de JS.

    2- Crear una función que permita reescribir la lista de usuarios.

    3- Crear una función que cambie el estado de actividad de todos los usuarios menores de 18 años a false y los devuelva dentro de un array.

    4- Crear una función que devuelva, dentro de un array, todos los usuarios que jueguen al menos 3 juegos y que tengan usuario activo.

    5- Crear una función que devuelva dentro de un array, los 'username' de los usuarios cuyos 'emails' sean de gmail y que jueguen al Fortnite.

    6- Crear una función que elimine un usuario. La función debe recibir el 'username' o el 'email' del usuario. Enviar un mensaje de error si el usuario no existe.
    
    7- Crear una función que consologuee un mensaje distinto dependiendo del idioma y devuelva, dentro de un array, todos los usuarios del país pasado como parámetro. Por ejemplo, si la función recibe 'Argentina' como parámetro, debería mostrar por consola un mensaje como 'El mate es argentino' y retornar lo siguiente:

    [
        {
            name: 'Eugenia',
            lastname: 'Suarez',
            age: 26,
            country: 'Argentina',
            email: 'eugesuarez@gmail.com',
            username: 'laChina',
            userActive: false,
            games: [
                    'The Sims 4',
                    'My Time at Portia',
                    'Pokémon',
                    'Watchdogs 2',
                    'Fortnite'
                   ]
        },
        {
            name: 'Lionel',
            lastname: 'Messi',
            age: 30,
            country: 'Argentina',
            email: 'lio@gmail.com',
            username: 'elPulga',
            userActive: true,
            games: [ 'FIFA 2021', 'GTA V', 'Counter Strike' ]
        }
    ]

    Tener en cuenta que el usuario puede escribir el pais con mayúsculas en cualquier parte de la palabra, por ejemplo, "urUgUAy".

    8- Crear una función que edite un usuario. La función recibe dos o más parámetros:
        * el primer parámetro debe ser el 'username' o 'email' del usuario buscado.
        * los siguientes parámetros son opcionales y siguen el orden de la lista.
        Enviar un mensaje de error si el usuario no existe.

````