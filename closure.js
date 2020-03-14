function counter(){
    var index = 0;
    function increment(){
        index = index + 1;
        console.log(index);
        return index;
    }
    return increment;
}

var userIncrement = counter(); // incrementa a la función
var adminIncrement = counter();

userIncrement();
userIncrement();
adminIncrement();
adminIncrement();
adminIncrement();

function greeting(name){
    function sayWelcome(){
        console.log(`Welcome to ${name}`);
    }
    return sayWelcome;
}

var greet = greeting('Atlanta'); //No se asigna un nuevo valor

greet();
greet();
greet();