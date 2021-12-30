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
    'country': 'cat'
}

console.log(person.name, person.age);

//ECMA6
let { name, age, country } = person;
console.log(name, age, country);