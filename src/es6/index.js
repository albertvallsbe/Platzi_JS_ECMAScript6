//Before ECMAScript6

function newFunction(nom, age, country) {
    var nom = nom || 'Albert';
    var age = age || 32;
    var country = country || 'Cat';
    console.log(nom, age, country);
};

//ECMAScript6

function newFunction2(nom = 'Albert', age = 32, country = "cat") {
    console.log(nom, age, country);
};

newFunction2();
newFunction2('Pep', '23', 'Fr');

let hello = "Hello";
let world = "World";

//before
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//ECMA6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Una frase de prova, per provar noves proves. \n"
    + "And other phrase.";

let lorem2 = `Otra frase epica
sdkgsdfrhdjh dfgdfhsdts hshjt
`;
//before
console.log(lorem);
//ECMA6
console.log(lorem2);

let person = {
    'nom': 'Albert',
    'age': 32,
    'country': 'cat  '
}


//before
console.log(person.nom, person.age);

//ECMA6
let { nom, age, country } = person;
console.log(nom, age, country);

let team1 = ['Albert', 'Julian', 'Ricard'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

//Var es te un scop global
{
    var globalVar = "Global Var";
}

//let no te scop global
{
    let globalLet = 'Global Let';
    //si cridem aqui si que funcionara
    console.log(globalLet);
}

console.log(globalVar);
//donará error
console.log(globalLet);

const a = 'b';
a = 'a';



let nom = 'Albert';
let age = 32;


object = { nome: nom, age: age };

console.log(object);
object2 = { nom, age };

console.log(object2);

const noms = [
    { nom: 'Albert', age: 32 },
    { nom: 'Maria', age: 31 }
]
//Funcio Normal
let listOfNoms = noms.map(function (item) {
    console.log(item.nom);
})
//Funció anonima ECMA 6
let listOfNoms2 = noms.map(item => console.log(item.nom));

const listOfNoms3 = (nom, age, country) => {
    // codi funcio
}
const listOfNoms4 = nom => {
    // codi funcio
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}
//Promeses
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));


//Classes
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 6));
console.log(calc.sum(2, -9));


//Moduls - Import/Export
import { hello } from './module';

hello();

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
