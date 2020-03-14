// function nameFunction(parameters){
//     statements;
// }

// let name  = function (parameters, parameters2){
//     statements;
// }

// let nameArrowFunction = parameters =>{
//     statements;
// }

const param1 = true;
const param2 = false;

function twoParameters(param1, param2){
    console.log(param1, param2);
}
twoParameters(param1, param2);

function surname(){
    return console.log('Hola'); //Ya no es necesario el return
}
surname();

let double = function(num){
    return console.log(num * 2); 
}
//double(20);
let test = double(3); //Se ejecuta apenas declarado la variable

function test2(){
    return console.log(true);
    return console.log(false);//mostrará error, nunca puede tern dos return al mismo tiempo
}

test();