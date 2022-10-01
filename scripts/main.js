//=========lesson-2=========

// 6. - Работа с переменными:

// - создайте переменную user и присвойте ей значение John Doe;
// const user = 'Joe Doe';
// - выведите в консоль значение переменной user;
// console.log(user);

// - создайте переменную student и запишите в неё ваше имя;
const student = 'Ksu Kuper';
// - выведите в консоль значение переменной student;
console.log(student);

// - запишите в переменную user переменную student;
// const user1 = 'student';
// - как вы думаете, что сейчас в переменной user? Свой вариант запишите в комментарий (student);
// - выведите в консоль значение переменной user.
// console.log(user1);

// 7. - Работа с примитивами:

// - создайте переменную test и присвойте ей значение 1;
// let test = '1';
// console.log(test);

// let test = 1;
// console.log(test);

// - увеличьте test на единицу;
// let test = '1';
// test++;
// console.log(test);

// let test = 1;
// test++;
// console.log(test);

// let test = '1';
// test += 1;
// console.log(test);

// let test = 1;
// test += 1;
// console.log(test);

// - прибавьте к test значение '1';
// let test = '1';
// test = test + 1;
// console.log(test);

// let test = 1;
// test = test + 1;
// console.log(test);

// let test = '1';
// test = `результат: ${test + 1}`;
// console.log(test);

// let test = '1';
// test = `результат: ${1 + 1}`;
// console.log(test);

// - отнимите от test значение 1;
// let test = '1';
// test = test - 1;
// console.log(test);

// let test = '1';
// test--;
// console.log(test);

// let test = 1;
// test = test - 1;
// console.log(test);

// - приведите test к типу bool;
// 1. false
// 1.1 NoParam
// let text = Boolean();

// 1.2 Zero
// let text = Boolean(0);

// 1.3 Null
// let text = Boolean(null);

// 1.4 EmptyString
// let text = Boolean('');

// 1.5 false
// let text = Boolean(false);
// console.log(text);

// 2. true
// 2.1 trueString
// let text = Boolean('true');

// 2.2 falseString
// let text = Boolean('false');

// 2.3 SuLin
// let text = Boolean('Су Лин');

// 2.4 ArrayProto
// let text = Boolean([]);

// 2.5 ObjProto
// let text = Boolean({});

// 2.6 true
// let text = Boolean(true);
// console.log(text);

// 8. Дан массив [2, 3, 5, 8]. С помощью цикла for найдите произведение элементов этого массива. Результат выведите в консоль.

// вывести на экран
// let result = 1;
// let num = [2, 3, 5, 8];
// for (let i = 1; i < 8; i++) {
//   result = num[i];
// }
// console.log(num);

// вывести результат произведения на экран
// let result = 1;
// let multiplication = [2, 3, 5, 8];
// for (let i = 0; i < multiplication.length; i++) {
//   result *= multiplication[i];
// }
//   console.log(result);

// 9. Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 5-ти, но меньше 10-ти.

// let outcome = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < outcome.length; i++) {
//   if (outcome[i] > 5 && outcome[i] < 10) {
//     console.log(outcome[i]);
//   }
// }

// 10. Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if выведите в консоль четные элементы массива.

// let a = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < a.length; i++) {
//   if ((a[i] % 2) === 0)
//   {
//     console.log(a[i]);
//   }
// }
// ************************************************************************************************
//==================================lesson-3=======================================================

// 5. Функция palindrome (Слово палиндром может читаться справа-налево и слева-направо одинаково. Прим "шалаш".):
// создайте функцию palindrome, которая будет возвращать bool значение в зависимости от того, является ли
// переданное функции слово палиндромом или нет.

// bool values - true or false

// Пример 1: проверка палиндрома с использованием цикла for

// // to check if the string is palindrome or not
// function checkPalindrome(string) {
// // find the length of a string
//   const l = string.length;
// // loop through half of the string
//   for (let i = 0; i < l / 2; i++) {
// // check if first and last string are same
//     if (string[i] !== string[l - 1 - i]) {
//       return 'It is not a palindrome';
//     }
//   }
//   return 'It is a palindrome';
// }
// // take input
// const string = prompt('Enter a string: ');
// // call the function
// const value = checkPalindrome(string);
// console.log(value);

// **********************
// Длина строки вычисляется с помощью length.
//   for цикл используется для итерации до половины строки.
//   if условие используется для проверки совпадения первого и соответствующего последнего символов.
//   Этот цикл продолжается до половины строки.
//   Во время итерации, если какой-либо символ строки по сравнению с соответствующей ему последней строкой
//   не равен, то строка не считается палиндромом.
// **********************

// Пример 2: проверка палиндрома с помощью встроенных функций

// // to check if the string is palindrome or not
// function checkPalindrome(str) {
// // convert string to an array
//   const arrayValues = str.split('');
// // reverse the array values
//   const reverseArrayValues = arrayValues.reverse();
// // convert array to string
//   const reverseStr = reverseArrayValues.join('');
//   if(str === reverseStr) {
//     console.log('It is a palindrome');
//   }
//   else {
//     console.log('It is not a palindrome');
//   }
// }
// //take input
// const str = prompt('Enter a string: ');
// checkPalindrome(str);

// **********************
// split(») метод преобразует строку в отдельные символы массива.
//   const arrayValues = string.split(''); - // ["h", "e", "l", "l", "o"]
// reverse() метод меняет позицию в массиве - // ["o", "l", "l", "e", "h"]
//   const reverseArrayValues = arrayValues.reverse();
// join(») Метод объединяет все элементы массива в строку.
//   const reverseString = reverseArrayValues.join(''); // "olleh"
// Затем if…else Оператор используется для проверки равенства строки и перевернутой строки.
//   Если они равны, то строка является палиндромом.
// **********************

// 6. Функция min(a, b) и функция max(a,b):
// напишите функцию min(a,b), которая возвращает меньшее из чисел;
// напишите функцию max(a,y), которая возвращает большее из чисел;
// попробуйте переписать функцию, используя тернарный оператор.
// **************************

// Вариант решения с использованием if:

// const getMin = (a, b) => {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
//
// const getMax = (a, b) => {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
//
// const a = 5;
// const b = 10;
// console.log(getMin(a, b));
// console.log(getMax(a, b));

// **************************
// Вариант решения с оператором "?"
// P.S. В случае равенства a == b не имеет значения, что возвращать

// const getMin1 = (c, d) => {
//   return c < d ? c : d;
// }
//
// const getMax1 = (c, d) => {
//   return c > d ? c : d;
// }
//
// const c = 5;
// const d = 5;
// console.log(getMin1(c, d));
// console.log(getMax1(c, d));
//
// const checkAge = (age) => {
//   return age >= 18;
// }
//
// // const age = 17;
// // console.log(checkAge(age));
//
// // take input
// const age = prompt('Enter your current age: ');
// // call the function
// const value = checkAge(age);
// console.log(value);

// **************************
// 7. Замена элементов массива:
//   создайте массив с десятью случайными элементами от 0 до 100;
//   напишите функцию, которая будет заменять все 0 на строку 'zero';
//   выведите полученный массив в консоль (пример: [12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]).

// Существует два варианта синтаксиса для создания пустого массива:
//   let arr = new Array();
//   let arr = [];
// **************************

// const num = [0, 5, 10, 25, 33, 35, 20, 20, 83, 59];

// console.log(number[0]);
// console.log(number[1]);
// console.log(number[2]);
// console.log(number[3]);
// console.log(number[4]);
// console.log(number[5]);
// console.log(number[6]);
// console.log(number[7]);
// console.log(number[8]);
// console.log(number[9]);
// console.log(number[10]);

// const replaceZero = number => {
//   const numStr = `${number}`;
//   if (numStr.includes('0')) {
//     return `${number}`.replaceAll('0', 'zero');
//   }
//   return number;
// }
//
// console.log(num.map(replaceZero).join(', '));

// можно сократить:

// const replaceZero = (number) => String(number).replaceAll('0', 'zero');
// console.log(num.map(replaceZero).join(', '));

// ************************************************************************************************
//==================================TEST 3, 4=======================================================

// console.log(square(5)); // ReferenceError
// const square = function (number) {
//   return number * number
// };
// console.log(square(5)); // 25

// function sum() {
//   return arguments[0] + arguments[1] + arguments[2]
// }
// console.log(sum (1, 2, 3)); // 6

// function myFun (a, b, ...manyMoreArgs) {
//   return a + b + manyMoreArgs[0]
// }
//
// console.log(myFun(1, 2, 3, 4, 5)); //6

// console.log(sayHello()); //hello
//
// function sayHello() {
//   console.log('Hello');
// }

// console.log(sum(1, 2)); // ReferenceError
// const sum = (a, b) => {
//   return a + b;
// }

// const func = n => {
//   if (n !==1) {
//     return n * func (n - 1);
//   } else {
//     return 1;
//   }
// }
// console.log(func(5)); //120

// ************************************************************************************************
//==================================lesson-4=======================================================

// 5. Напишите функцию sum, которая возвращает сумму чисел следующим образом:
//   console.log(sum(5)(2)); // 7

(() => {
  function sum(n1, n2) {
    return n1 + n2;
  }
  console.log(sum(5, 2));
})();

(() => {
  const calc = (n1, n2, ...args) => {
    let result = n1 + n2 || 1;
    for (let i = 0; i < args.length; i++) {
      result = args[i];
    }
    return result;
  };
  const n1 = 5;
  const n2 = 2;
  const sum = calc(n1, n2);
  console.log(sum);
})();

// 6. Покрасьте абзацы по клику (событие click):
// даны 3 абзаца:
//   <p id="text1">Text 1</p>
//   <p id="text2">Text 2</p>
//   <p id="text3">Text 3</p>
// дан массив цветов:
//   const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// по первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - во второй и так далее;
// цвета из массива меняются бесконечно;
// все абзацы работают независимо.

// const text1 = document.getElementById('text1');
// const text2 = document.getElementById('text2');
// const text3 = document.getElementById('text3');
//
// let colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
//
// function getColor() {
//   for (let i = 0; i <= colors.length; ) {
//     return function (event) {
//       event.target.style.color = colors[i];
//       i++;
//       if (i > colors.length) {
//         i = 0;
//       }
//     };
//   }
// }
//
// text1.addEventListener('click', getColor());
// text2.addEventListener('click', getColor());
// text3.addEventListener('click', getColor());

// const text1 = document.getElementById('text1');
// const text2 = document.getElementById('text2');
// const text3 = document.getElementById('text3');
//
// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
//
// colors.forEach(function(item, i, colors) {
//   for (const i = 0; i <= colors.length;) {
//       return function(MouseEvent) {
//         MouseEvent(i + ": " + item + " (array:" + colors + ")");
//     }
//   }
// });
//
// text1.addEventListener('click', colors.forEach());
// text2.addEventListener('click', colors.forEach());
// text3.addEventListener('click', colors.forEach());

// text2.addEventListener('click', (event) => {
//   event.target.style.color = document.getElementById;
// });
// text3.addEventListener('click', (event) => {
//   event.target.style.color = document.getElementById;
// });

// ***************************************************************************************
// alert('I am JS!');
// prompt('I am JS!')
// console.log('I am JS!');
//
// alert('Hello');
// alert('world!');
// console.log('Hello');
// console.log('world!');
//
// alert(3 +
//   1
//   + 2);
// console.log(3 +
// 1
// +2);
//
// alert('Hello');
// [1, 2].forEach(alert);
//
// console.log('Hello');
// [1, 2].forEach(console.log);
//
// // alert('Hello')[1, 2].forEach(alert); - 1. Hello; 2. TypeError: undefined is not an object (evaluating 'alert('Hello')[1, 2]')
//
// let message = 'Hello!'; // определяем переменную и присваиваем ей значение
//
// alert(message); // Hello!
// console.log(message);

// let user = 'John';
// let age = 25;
//
// console.log(user, age);
//
// const birthday = '03.06.1986';
// console.log(birthday);
//
// let admin, name;
//
// name = 'Julia';
// admin = name;
//
// alert(admin);
// console.log(admin);
//
// const planet = 'Earth';
//
// alert(planet);
// console.log(planet);

// const myBirthday = '03.06.1986';
// let myAge = someCode(myBirthday);
//
// function someCode(): any {
// }

// let name = 'Ilya';
//
// // выражение - число 1
// alert(`hello ${1}`); // hello 1
// console.log(`hello ${1}`);
//
// // выражение - строка "name"
// alert(`hello ${'name'}`); //hello name
// console.log(`hello ${'name'}`);
//
// // выражение - переменная, вставим её в строку
// alert(`hello ${name}`); //hello Ilya
// console.log(`hello ${name}`);

// prototype
//
// const person {
//   name: 'Max',
//   age: 25,
//   greet function () {
//     console.log(Greet!)
//   }
//   console.log(person);
// }
import { sayHi } from './module.js';

console.log(sayHi('John'));
