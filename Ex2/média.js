const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Digite uma nota:"))
let nota2 = parseFloat(prompt("Digite outra nota:"))
let nota3 = parseFloat(prompt("Digite outra nota:"))

console.log((nota1+nota2+nota3) /3);

if(nota1 < 4){
    console.log("Aluno reprovado :( ")
}

else if(nota2 <= 5.9){
    console.log("Aluno de recuperação")
}

else if(nota3 > 6){
    console.log("Aluno aprovado :) !!!!")
}