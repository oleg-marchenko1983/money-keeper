let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');
// Восстановить порядок в меню, добавить пятый пункт
menuItem[1].textContent = 'Второй пункт';
menuItem[2].textContent = 'Третий пункт';
// Добавить пятый пункт меню
/* Первый вариант */
// let menuItemFive = document.createElement('li');
// menuItemFive.classList.add('menu-item');
// menu.appendChild(menuItemFive);
// menuItemFive.textContent = 'Пятый пункт'
/* Второй вариант */
let menuItemFive = menuItem[0].cloneNode();
menu.appendChild(menuItemFive);
menuItemFive.textContent = 'Пятый пункт'
// menu.replaceChild(menuItem[1],menuItem[2]);

//Заменить картинку заднего фона на другую из папки img
/* Первый вариант */
// document.body.style.background = 'url(./img/apple_true.jpg) center no-repeat';
// document.body.style.backgroundSize = 'cover';
/* Второй вариант */
let body = document.querySelector('body');
body.style.background = 'url(./img/apple_true.jpg) center no-repeat';
body.style.backgroundSize = 'cover';

//Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
let title = document.querySelector('.title').textContent = 'Мы продаем только подлинную технику Apple';

//Удалить рекламу со страницы
let column = document.querySelectorAll('.column');
let adv = document.querySelector('.adv');
column[1].removeChild(adv);

//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

 let promptforApple = document.querySelector('#prompt');
 let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
 promptforApple.textContent = yourOpinion;


