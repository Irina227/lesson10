"use strict";

/*УРОК 10*/
const books = document.querySelectorAll(".book"); //обращение к книге, меняются местами книги
const elem = document.querySelectorAll("ul");
const list = document.querySelectorAll("li");

books[0].before(books[1]);
books[4].after(books[3]);
books[5].after(books[2]);

books[0].querySelector("ul").before(list[0]);
books[0].querySelector("ul").before(list[1]);
books[0].querySelector("ul").before(list[3]);
books[0].querySelector("ul").before(list[6]);
books[0].querySelector("ul").before(list[8]);
books[0].querySelector("ul").before(list[4]);
books[0].querySelector("ul").before(list[5]);
books[0].querySelector("ul").before(list[7]);
books[0].querySelector("ul").before(list[9]);
books[0].querySelector("ul").before(list[2]);
books[0].querySelector("ul").before(list[10]);

// books[5].querySelector("ul").before(list[1]);
// books[5].querySelector("ul").before(list[9]);
// books[5].querySelector("ul").before(list[3]);
// books[5].querySelector("ul").before(list[4]);
// books[5].querySelector("ul").before(list[2]);
// books[5].querySelector("ul").before(list[6]);
// books[5].querySelector("ul").before(list[7]);
// books[5].querySelector("ul").before(list[5]);
// books[5].querySelector("ul").before(list[8]);





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


