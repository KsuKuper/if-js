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

const getMin1 = (c, d) => {
  return c < d ? c : d;
}

const getMax1 = (c, d) => {
  return c > d ? c : d;
}

const c = 5;
const d = 5;
console.log(getMin1(c, d));
console.log(getMax1(c, d));

const checkAge = (age) => {
  return age >= 18;
}

// const age = 17;
// console.log(checkAge(age));

// take input
const age = prompt('Enter your current age: ');
// call the function
const value = checkAge(age);
console.log(value);

// **************************
// 7. Замена элементов массива:
//   создайте массив с десятью случайными элементами от 0 до 100;
//   напишите функцию, которая будет заменять все 0 на строку 'zero';
//   выведите полученный массив в консоль (пример: [12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]).

// Существует два варианта синтаксиса для создания пустого массива:
//   let arr = new Array();
//   let arr = [];
// **************************


const num = [0, 5, 10, 25, 33, 35, 20, 20, 83, 59];

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

const replaceZero = number => {
  const numStr = `${number}`;
  if (numStr.includes('0')) {
    return `${number}`.replaceAll('0', 'zero');
  }
  return number;
}

console.log(num.map(replaceZero).join(', '));

