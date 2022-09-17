// 6. - Работа с переменными:

// - создайте переменную user и присвойте ей значение John Doe;
const user = 'Joe Doe';
// - выведите в консоль значение переменной user;
console.log(user);

// - создайте переменную student и запишите в неё ваше имя;
const student = 'Ksu Kuper';
// - выведите в консоль значение переменной student;
console.log(student);

// - запишите в переменную user переменную student;
const user1 = 'student';
// - как вы думаете, что сейчас в переменной user? Свой вариант запишите в комментарий (student);
// - выведите в консоль значение переменной user.
console.log(user1);

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

let test = '1';
test--;
console.log(test);

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
let text = Boolean(true);
console.log(text);

// 8. Дан массив [2, 3, 5, 8]. С помощью цикла for найдите произведение элементов этого массива. Результат выведите в консоль.

// вывести на экран
// let result = 1;
// let num = [2, 3, 5, 8];
// for (let i = 1; i < 8; i++) {
//   result = num[i];
// }
// console.log(num);

// вывести результат произведения на экран
let result = 1;
let multiplication = [2, 3, 5, 8];
for (let i = 0; i < multiplication.length; i++) {
  result *= multiplication[i];
}
  console.log(result);

// 9. Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 5-ти, но меньше 10-ти.

let outcome = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < outcome.length; i++) {
  if (outcome[i] > 5 && outcome[i] < 10) {
    console.log(outcome[i]);
  }
}

// 10. Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if выведите в консоль четные элементы массива.

let a = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < a.length; i++) {
  if ((a[i] % 2) === 0)
  {
    console.log(a[i]);
  }
}
