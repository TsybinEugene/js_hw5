/*Домашняя работа No5. Функции*/


/*1. Сделайте функцию, которая отнимает от первого числа второе и делит на
третье. Числа передаются параметром.*/

function math(a, b, c) {
    return (a-b)/c;
}
console.log(math(5, 1, 2));

console.log('------------------------------');

/*2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
передается параметром.*/

function math2(a) {
    let sqr = Math.pow(a, 2);
    let cube = Math.pow(a, 3);
    return 'Число в квардате = ' + sqr + ', Число в кубе = ' + cube;
}

console.log(math2(2));

console.log('------------------------------');

/*3. Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b.*/

function minMax(a, b) {
    if (a < b) {
        min = a;
        max = b;
    } else {
        min = b;
        max = a;
    }

    return 'Минимальное число: ' + min + ', Максимальное число: ' + max;
}

console.log(minMax(7, 2));

console.log('------------------------------');

/*4. Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив.*/

function createArray() {
    let arr = [];
    let i = 0;
    let a = +prompt('Первое число диапазона массива');
    let b = +prompt('Второе число диапазона массива');

    if (a < b) {

        for (i = a; i <= b; i++) {
            arr.push(i);
        }
    } else {
        for(i = b; i <=a; i++) {
            arr.push(i);
        }
    }

    return arr;    
}

function outputArray() {
    
    console.log('Полученный массив: ' + createArray());
}

outputArray();

console.log('------------------------------');

/*5. Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false.*/

function isEven(a) {
    if(a % 2 == 0){
        return true;
    } else {
        return false;
    }
     
}

console.log(isEven(10));

console.log('------------------------------');

/*6. Напишите ф-цию, в которую передается массив с целыми числами.
Верните новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей
задачи.*/

let arr1 = [4, 2, 7, 4, -3, 6, 1, 8, 86];

function evenArray(arr) {
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        if(isEven(arr[i])) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

console.log('Массив с четными числами: ' + evenArray(arr1));

console.log('------------------------------');

/*7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
кроме пробела, то пирамида должна быть нарисована этим символом,
например:

*
**
***
****
*****
******
*******
********
*********   */

function pyramide(h) {
    let str = '';

    for (let i = 1; i <= h; i++) {
        str = '';

        for (let j = 1; j <= i; j++) {
            str += i;
        }

        console.log(str);
    }
    
}

pyramide(prompt('Число рядов'));

console.log('------------------------------');

/*8. Напишите ф-цию, которая рисует равнобедренный треугольник из
звездочек:

*
***
*****
*******
*********

Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
цию, но которая выведет перевернутый треугольник.*/

function triangle(h) {
    let str = '';
    
    for (let i = 1; i <= h; i++) {
        str = '';
    
        for (let j = 1; j <= (h - i); j++) {
            str += ' ';
        }
    
        for (let j = 1; j <= (i*2-1); j++) {
            str += '*';
        }
    
        console.log(str);
    
    }
}

triangle(prompt('Число рядов'));

function triangleRev(h) {
    let str = '';
    
    for (let i = 1; i <= h; i++) {
        str = '';
    
        for (let j = 1; j <= (i - 1); j++) {
            str += ' ';
        }
    
        for (let j = (h*2-i); j >= i; j--) {
            str += '*';
        }
    
        console.log(str);
    
    }
}

triangleRev(prompt('Число рядов'));

console.log('------------------------------');

/*9. Напишите ф-цию, которая возвращает массив заполненный числами
Фибоначи от 0 до 1000.*/

function fib() {
    let arr = [];
    let num = 0;

    for(let i = 0; ; i++) {

        if ((i == 0 || i == 1) && arr[i] == undefined) {
            arr.push(i);
            continue;
        }

        num = arr[i-1] + arr[i-2];
        if (num >= 1000) break;

        arr.push(num);

    }

    console.log(arr);
}

fib();

console.log('------------------------------');

/*10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
опять сложите его цифры. И так, пока сумма не станет однозначным числом
(9 и менее). Исп. Рекурсию.*/

function sumNum(num) {
    
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += +num[i];
    }
    if (sum > 9) {
        sumNum(sum +'');   
    } else {
        console.log('Итоговое однозначное число: ' + sum);
    }
}
sumNum('15789');

console.log('------------------------------');

/*11. Дан массив с числами (передается параметром). Выведите
последовательно его элементы, используя рекурсию и не используя цикл.*/

function printArr(arr, i = 0) {

    console.log(arr[i]);

    i++;

    if (arr[i] != undefined) printArr(arr, i);
}

printArr([2,5,76,-4,'A',3]);

console.log('------------------------------');

/*12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
группы студента и выводящую введённые данные в следующем виде:

*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович *
*****************************

Размер рамки должен определятся автоматически по самой длинной строке.
Рамку вывести в консоль.*/

function card() {
    let fio = prompt('Ваше ФИО', 'Иванов Иван Иванович');
    let group = prompt('Номер группы', 'ВЕ105');

    let line1 = 'Домашняя работа "Функции"';
    let line2 = `Выполнил: студент гр. ${group}`;
    let line3 = fio;

    let length = 0;

    if (line1.length > length) length = line1.length;
    if (line2.length > length) length = line2.length;
    if (line3.length > length) length = line3.length;

    let flLine = '';

    for (let i = 1; i <= (length + 4); i++) {
        flLine += '*';
    }

    function spaces(length, maxLength) {
        let s = '';

        for (let i = 1; i <= (maxLength - length); i++) {
            s += ' ';
        }

        return s;
    }

    console.log(flLine);
    console.log('* ' + line1 + spaces(line1.length, length) + ' *');
    console.log('* ' + line2 + spaces(line2.length, length) + ' *');
    console.log('* ' + line3 + spaces(line3.length, length) + ' *');
    console.log(flLine);
}

card();

console.log('------------------------------');

/*13. Напишите ф-цию, которая должна проверить правильность ввода адреса
эл. почты, неиспользуя регулярные выражения. Почта верна при условии:
a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
быть первыми и последними в адресе, и идти подряд, например: «..», «@.»,
«.@» или «@@», «_@», «@-», «--» и т.п.
b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени, и точку;
c. после последней точки и после @, домен верхнего уровня (ru, by, com и
т.п.) не может быть длиной менее 2 и более 11 символов.

Для ввода значений можете использовать ф-цию prompt(), либо задавать
значения при инициализации переменных в коде.
Для вывода результатов скриптов вы можете использовать функции: alert()
для вывода всплывающего окна; console.log() для вывода в консоль браузера;
document.write() для вывода в «тело» HTML-документа.*/

function validEmail(email) {
    let trueChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '@', '.', '-', '_'];
    let trueSpChars = ['@', '.', '-', '_'];

    let error = false;

    if (!isNaN(email[0])) error = true;

    if (email.indexOf('@') <= 1) error = true;

    if (email.indexOf('@') == -1 ||
        email.indexOf('@') != email.lastIndexOf('@')) {
        error = true;
    }

    if (email.lastIndexOf('.') < email.indexOf('@')) {
        error = true;
    }

    let diff = email.length-1 - email.lastIndexOf('.');

    if (diff < 2 || diff > 11) {
        error = true;
    }

    for (let i = 0; i < email.length-1; i++) {
        if (trueChars.indexOf(email[i]) == -1) {
            error = true;
            break;
        }

        if (trueSpChars.indexOf(email[i]) != -1 && (
            i == 0 || i == email.length-1 ||
            trueSpChars.indexOf(email[i+1]) != -1 ||
            trueSpChars.indexOf(email[i-1]) != -1
        )) {
            error = true;
            break;
        }
    }

    return !error;

}

console.log(validEmail('name@gmail.com'));
console.log(validEmail('name@gmail.cjnrefnfhebwfhebwjefwefwef'));