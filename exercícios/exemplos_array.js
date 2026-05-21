//Isabela Rossi

let frutas = ["maça", "banana", "laranja"];
console.log(frutas);

// Criando um array de números
let numeros = [1, 2, 3, 4, 5];

console.log(numeros); // Output: [1, 2, 3, 4, 5]

//Acessando elementos do array
let carros = ["Fusca", "Gol", "Palio"];

console.log(carros[0]); // Output: "Fusca"
console.log(carros[1]); // Output: "Gol"

//Alterando elementos do array
let cores =["vermelho", "verde", "azul"];

cores[1] = "amarelo";
console.log(cores); // Output: ["vermelho", "amarelo", "azul"]

//Descobrindo o tamanho do array
let animais = ["cachorro", "gato", "coelho", "hamster", "papagaio", "peixe", "tartaruga", "cobra", "leão", "tigre"];
console.log(animais.length); // Output: 10

//Adicionando elementos ao final do array com push()
let paises = ["Brasil", "Argentina", "Chile"];
paises.push("Uruguai");
console.log(paises); // Output: ["Brasil", "Argentina", "Chile", "Uruguai"]

//Removendo o último elemento do array com pop()
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte"];
cidades.pop();
console.log(cidades); // Output:["São Paulo", "Rio de Janeiro"]
