let a;
a = 10;
alert(a);

a = 20;
alert (a);

let dateFirstIPhone;
dateFirstIPhone = 2007;
alert (`Год выпуска первого iPhone ${dateFirstIPhone}`);

let nameCreatorJS;
nameCreatorJS = "Брендан Эйх";
alert (`Имя создателя языка Java Script ${nameCreatorJS}`);

let b = 10;
let c = 2;
let sum = b+c;
alert (`Сумма чисел ${b} и ${c} равна ${sum}`);
let res = b-c;
alert (`Разность чисел ${b} и ${c} равна ${res}`);
let mult = b*c;
alert (`Произведение чисел ${b} и ${c} равно ${mult}`);
let segm = b/c;
alert (`Частное чисел ${b} и ${c} равно ${segm}`);

alert (`2 в 5 степени будет ${result=2**5}`);

a=9;
b=2;
alert (`Остаток от деления ${a} на ${b} составит ${residue=a%b}`);

let num = 1;
num +=5;
num -=3;
num *=7;
num /=3;
num ++;
num --;
alert (num);

let age = prompt(`Сколько Вам лет?`);
alert (age);

const user = {
    name: String (`Mary`),
    age: Number (36) ,
    isAdmin: Boolean (true) ,
};
console.log(user.name);
console.log(typeof(user.name));
console.log(user.age);
console.log(typeof(user.age));
console.log(user.isAdmin);
console.log(typeof(user.isAdmin));
user['city of resident']=Boolean (true);
console.log(typeof(user['city of resident']));
console.log(user['city of resident']);
user['age'] = prompt (`Измените Ваш возраст`);
console.log(user.age);
delete user['city of resident'];
console.log(user['city of resident']);
let info = prompt ("Что Вы хотите узнать о пользователе?","name");
alert (info=user.name);
info = prompt ("Что Вы хотите узнать о пользователе?","age");
alert (info=user.age);
info = prompt ("Что Вы хотите узнать о пользователе?","isAdmin");
alert (info=user.isAdmin);

let userName = prompt ("Как Вас зовут?");
alert (`Привет, ${userName.toUpperCase()}!`);
