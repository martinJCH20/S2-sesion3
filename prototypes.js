function Counter(count){
    this.count = count;
}

Counter.prototype.count = 2;

var counter = new Counter(6); //Sobre escribe el valor

console.log(counter.count);

