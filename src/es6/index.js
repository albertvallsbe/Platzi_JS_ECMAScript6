//Before ECMAScript6

function newFunction(name, age, country) {
    var name = name || 'Albert';
    var age = age || 32;
    var country = country || 'Cat';
    console.log(name, age, country);
};

//ECMAScript6

function newFunction2(name = 'Albert', age = 32, country = "cat") {
    console.log(name, age, country);
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
    'name': 'Albert',
    'age': 32,
    'country': 'cat  '
}


//before
console.log(person.name, person.age);

//ECMA6
let { name, age, country } = person;
console.log(name, age, country);

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