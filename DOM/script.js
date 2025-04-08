/* Obtener un elemento/nodo del DOM */

const element = document.getElementsByTagName
("h1");
console.log(element);

const elementID = document.getElementsByID
('noticia1');
console.log(elementID);

const elementClass = document.getElementsByClassName('titulo');
console.log(elementClass);

/* querySelector */

const h1 = document.querySelector('h1');
console.log(h1);

const h1Byclass = document.querySelector('titulo');

h1.textContent = "Cambiado desde JS"