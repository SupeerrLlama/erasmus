// Comentario de una sola linea
/* Comentario
de varias lineas */

/* sintaxisn crear variable

var nombreVariable; /No usar
let nombreVariable;
const PI=3.14159; Constantes

Nombrar variable (nombre descriptivo)
Puede contener letras, numeros y guiones(lines) bajo
let nombre01_20;
No puede empezar con numero
let 01nombre
No puede ser nombrada con palabras del proprio languaje
let console; 
let for;

let nombreAlumno; (camel case)
*/

/*
var nombre = 'Antonio';
let apellido = 'Mesa';

//Tipos de datos en Javascript

    number-->numerico
        let numero = 2;
        let numero2 = 3.1489;

    string-->cadena de caracteres
        let cadena = 'cadena de caracteres';
        let cadena2 = "cadena de caracteres";
        let cadena3 = `cadena de caracteres`;

    boolean-->true or false
    let boolean = true;

    null-->sin valor o contiendo

    undefined-->sin definir

    object-->objecto
        let alumno = {
            'name':'Luna',
            'apellido':'Mesa',
            'hobby':'Jugar'
        }
*/


/*
let 
console.log(nombre);
console.log(apellindo);

var nombre = 'Luna';
console.log(nombre);
let apellido = 'Mesa';
*/

//Tipos de datos en Javascript

let numero = 10;
console.log("La variable numero" + "es" + typeof numero);
console.log("El contenido es:" + numero);

let boolean = true;
console.log(typeof boolean);

let cadena

let alumno = {
    'name':'Luna',
    'apellido':'Mesa',
    'hobby':'Jugar'
};

console.log(typeof alumno);

/* operadores */

/**
 * Asignacion
 * = asigna un valor a una variable
 * += suma y asigna
 * -= resta y asigna
 * *= multiplica y asigna
 * /= divide y asigna
 * %= resto de division y asigna
 * 
 * Aritmeticos
 *  suma +
 *  resta -
 *  multiplicacion *
 *  division /
 *  modulo % resto de la division
 */

let numero1 = 10;
let numero2 = 5;

console.log(numero1 + numero2);
console.log(numero1 % numero2);
console.log(numero1 / numero2);

/* Operadores de logicos o de comparacion

igual == (value)
iguall estricto === (type and value)
distinto !=
distinto estricto !==
Mayor que >
Mayor igual que >=
Menor que <
Menor igual que <=
*/

console.log(numero == numero2);
numero1 = 10;
cadena = '10';
console.log(numero == cadena); //true
console.log(numero === cadena); //false

/* Concatenacion 

    Unir dos string
    Syntax

    "Hola " + "Mundo" => "Hola Mundo"
*/


/* Operator Tenario

Se necesitan tres operadores
Es un operador condicional
syntax

condicion ? valor1 : valor2;

Si la condicion es true devuelve valor1 si no, devuelve valor2
*/

console.log(numero1 === numero2 ? "Son iguales" : "son diferentes");

/* Condicionales */

/*
    if...else

    syntax:

    if(condicion){
        bloque de codigo si verdadero
    }else {
        bloque de codigo si falso
    }

    Valores falsos:
        -false
        -undefined
        -null
        -0
        -NaN
        - '' (empty string)
*/


/*
    switch ... case

    syntax:
    switch (expresion){
    case valor1:
        bloque de codigo si valor1 
        break;

    case valor2:
        bloque de codigo si valor2
        break;

    case valor3:
        bloque de codigo si valor3
        break;
    }

(efectiv 3 if-else-uri)

*/

nombre = 'Luna';

switch(nombre){

    case 'Luna':
        console.log("Hola soy Luna");
        break;

    case 'Antonio':
        console.log("Hola soy Antonio");
        break;

    default:
        console.log("Hola no se quien soy");
        break;
}

/* Loops */

/*
    for

    syntax

    for(let i=0; i<10; i++){
        Repite 10 veces este codigo
    }

    while
    syntax

    while(condicion){
        bloque de codigo
    }

    do...while
    syntax

    do{
        bloque de codigo
    }while(condicion);

*/


/* Funciones */

/* 
    Syntax:

    funcion nombreFuncion (parametros opcionales){
        bloque codigo
        return opcional si devuelve valor
    }
*/

function operacionAritmetica (operador, valor1, valor2){
    if(operador === '*'){
        return valor1 * valor2;
    }
    else  if(operador === '+'){
        return valor1 + valor2;
    }
    else  if(operador === '-'){
        return valor1 - valor2;
    }
    else  if(operador === '/'){
        return valor1 / valor2;
    }
}

let resultado = 0;
resultado = operacionAritmetica('*', numero1, numero2);
console.log("El resultado es:" + resultado)

resultado = operacionAritmetica('/', numero1, numero2);
console.log("El resultado es:" + resultado)

resultado = operacionAritmetica('+', numero1, numero2);
console.log("El resultado es:" + resultado)

resultado = operacionAritmetica('-', numero1, numero2);
console.log("El resultado es:" + resultado)

/* Arrays / Listas */

/*
    let frutas = ['manzana','platano','naranja'];
*/

let frutas = ['manzana', 'platano', 'naranja'];

console.log(typeof frutas);

/*
    object tiene

    propiedades igual atributos metodos igual atributos metodos igual a acciones que puede reslizar (funciones)
*/

console.log(frutas[0]);

frutas.forEach(element => {
    console.log(element);
});

/* anadir un elemento a la lista */

frutas.push('Kiwi"')
console.log(frutas);

/* quiutar un elee */

frutas.pop();
console.log(frutas);

/* anadir al principo */

frutas.unshift('kiwi', 'melon');
console.log(frutas);

/* tamano del array */

console.log(frutas.length);

/* en la pagina mdn developers encontramos mas metodos para los arrays */

/* programacion orientada a objetos */

/* crear un dato object */

let persona = new Object();
let coche = {}

persona = {
    'nombre':'Luna',
    'edad': 4,
    'profesion': 'Ser feliz',
    'retir': function(){
        console.log("me estoy riendo(laughing)")
    }
}

console.log(persona);

/* Acceder a un dato del objeto */

console.log(persona.nombre);
console.log(persona['edad']);

/* Anadir propiedades */

persona.pais = 'Espana';
console.log(persona);

persona.retir();

/* Clases
    una mejora sobre la herencia en los objetos

    Las clases son como fabrica de objetos

    fabrica de vehiculos --> coche, moto, bicicleta, camion...

    syntax

    class NombreClase {
        constructor(parametros){
            this.parametro1 = parametro1;
            this.parametro2 = parametro2;
        }
    }

/* Ejemplo Basico */

class Robot {
    constructor(nombre, color){
        this.nombre = nombre; //Propriedad del robot
        this.color = color
    }

    //Metodo para que pueda hablar
    hablar() {
        console.log( `Hola! Soy ${this.nombre} y mi color es ${this.color}, tu robot amigo. 👾`);
    }

    mover(){
        console.log(`${this.nombre} esta moviendose...🤩`)
    }
}

let robot1 = new Robot('Atibot')
robot1.hablar();

let robot2 = new Robot('Skayner');
robot2.hablar();
robot2.mover();

/* Herencia en POO */

class RobotBailarin extends Robot{
    bailar(){
        console.log(`${this.nombre} esta bailando 🙀🐱‍🚀🐱‍🐉🐱‍💻🐱‍👓`);
    }
}

let robotBailarin = new RobotBailarin('DancerBot', 'Green');

robotBailarin.hablar();
robotBailarin.bailar();
//robot1.bailar(); Da error al no existir en la clase Robot.

/* Funciones callback

    Son funciones que se pasan como parametros de otras funciones y se  ejecutan dentro de ellas
*/

function saludar(nombre){
    console.log(`Hola, ${nombre}`);
}

function ingresarNombre(callback){
    let nombre = prompt("Escribe tu nombre:");

    callback(nombre);
}

ingresarNombre(saludar);