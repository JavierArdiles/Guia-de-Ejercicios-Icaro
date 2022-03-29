function deficiente(x) {
    if( x == 1 ) return false;
    let suma = 0;
    for( let i = 1; i < x; i++ ) {
        if( x % i == 0 ) {
            suma = suma + i;
        }
    }
    if( suma >= x ) {
        return false;
    }
    return true;
}

// Alternativa:
// const deficiente = x => {
//     if( x == 1 ) return false;
//     let suma = 0;
//     for(let i = 1; i < x; i++ ) {
//         suma = x % i == 0 ? suma + i : suma;
//     }
//     return suma < x;
// }

module.exports = deficiente;