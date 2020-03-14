//Invocación inmediata de funciones

function print(){
    console.log('Learning JS!');
}

//print();

(function(){ //Se ejecuta siempre, sin crear y llamar funcion
    console.log('Learning JS!');
})();

// () => {
// }

(function square(value){
    var result = value * value;
    console.log(result);
})(10); //Envia valor y ejecuta inmediatamente