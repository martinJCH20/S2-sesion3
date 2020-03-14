// ¡Hace calor! Hagamos un convertidor basado en los siguientes pasos
// Cree una funcion llamada celciustoFahrenheit: Almacene una temperatura en centigrados en una variable
// conviertalo a Fahrenheit y Envie "NN" ºC es NN Fº
// Cree una funcion llamada fahrenheittoCelcius: Almacene una temperatura en Farenheit en una variable
// conviertalo a Celcius y envie "NN Fº es NN en ºC"

var temCenti = 1;

function celciustoFahrenheit(temp){
    var fah = (temp * 9/5) + 32;
    console.log(`${fah} F°`); 
}
celciustoFahrenheit(temCenti);


var temFahr = 32;

function fahrenheittoCelcius(temp){
    var Celc = (temp - 32) * 5/9;
    console.log(`${Celc} °C`); 
}
fahrenheittoCelcius(temFahr);