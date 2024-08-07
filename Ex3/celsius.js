const prompt = require('prompt-sync')();

let temperatura = parseFloat(prompt("Digite alguma temperatura:"));

let fahren = ((temperatura * 9 / 5) + 32)
console.log("A conversão da temperatura para fahrenheit é:",fahren," ")