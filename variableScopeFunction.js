var num = 1; //variable is global

function showGlobal(){
    console.log(num);
}
showGlobal();

function showLocal(){
    var num = 2;
    console.log('Show Local: ',num); //A pesar de tener el mismo nombre, lo reconoce solo como variable local
}
showLocal();

function showArgument(num){
    console.log('Show Argument: ',num); //Enviamos parámetro a la función, lo reconoce independientemente
}
showArgument(3);


//En ninguno de los 3 casos num son iguales, son variables únicas