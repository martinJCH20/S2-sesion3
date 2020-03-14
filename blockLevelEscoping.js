function noBlock(){
    if(true){
        var width = 10; // not block level scoped -- Siempre mostrará su valor
    }
    console.log(width);
}

noBlock();