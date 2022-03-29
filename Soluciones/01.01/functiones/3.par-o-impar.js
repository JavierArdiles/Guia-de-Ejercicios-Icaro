function parOImpar(x){
    if(x == 0){
        return false;
    }
    if(x % 2 == 0){
        return true;
    }
    return false;
};

// Alternativa:
// const esPar = x => x != 0 && x % 2 == 0;

module.exports = parOImpar;