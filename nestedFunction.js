function hypotenusa(m, n){
    //outer function
    function square(num){
        //inner funtion
        console.log('inner function');
        return num * num;
    }
    console.log('outer function');
    return Math.sqrt(square(m) + square(n));
}

console.log(hypotenusa(3,4));

function verify(name){ // function verify(name, surname = 'Henderson'){} Se asigna valor fijo al paramétro
    function isJohn(){
        return name === 'John';
    }

    if(isJohn()){
        console.log('Yes, this is John');
    }else{
        console.log(`No, this is ${name}`);
    }
}

verify('John');//Martín