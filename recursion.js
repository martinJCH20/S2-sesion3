function countDown(n){
    console.log(n);
    if(n >= 1)countDown(n-1); //Se vuelve a invocar la funcion
}
countDown(5);

function countdownFor(n){
    for (let i = n; i >= 0; i--){
        console.log(i);
    }
}
countdownFor(5);