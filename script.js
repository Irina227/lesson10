"use strict";

/*УРОК 10*/
const books = document.querySelectorAll(".book"); //обращение к книге, меняются местами книги
const elem = document.querySelectorAll("ul");
const list = document.querySelectorAll("li");
books[0].before(books[1]);
books[4].after(books[3]);
books[5].after(books[2]);
books[0].querySelector("ul");




console.log(books[0].querySelector('ul'));
console.log(books[0].querySelector('ul').querySelectorAll('li'));
console.log(books[0].querySelector('ul').querySelectorAll('li')[2]);
console.log(books);
console.log(books[0]);

document.body.style.background = "red";

const google = document.querySelectorAll(".adv"); //убрали рекламу
google[0].remove();

const listing = document.querySelectorAll("a"); //передача новой строки элементу
listing[2].replaceWith("Книга 3. this и Прототипы Объектов");

// books[0].elem[1].after(list[2])

// const href = document.querySelectorAll('ul');//обращение к списку
// const elems = document.querySelectorAll('li');//обращение к элементу списка

// href[4].prepend(elems[1]);
// console.log(elems);

// list[6].replaceWith('Книга 3. this и Прототипы Объектов');
// list[2].append('Глава 8: За пределами ES6');

// console.log(list);
