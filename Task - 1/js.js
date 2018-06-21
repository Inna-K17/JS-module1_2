// alert -----------------------------------------------------
//alert('helo');

/*
var a = 5 , b = 3;
alert(5 > 3);
*/

// prompt -----------------------------------------------------
/*
var userName = prompt('how are you?');
console.log(userName);
*/

/*
var years = prompt('How old are you?' , 100);
alert('вам ' + years + ' лет');
*/

// confirm -----------------------------------------------------
/*
var agree = confirm('вы точно хотите выйсти из сайта?');
alert(agree);
*/


// var  myVariable;
//  alert(myVariable);



// инкримент -----------------------------------------------------
// result = 3;
// result++; // тоже самое что result = result + 1 
// alert(result);

// декримент  -----------------------------------------------------
// result = 3;
// alert(result--);
// alert(result);

// если нам нужно увеличить на 5 допустим -----------------------
// var result = 3;
// result +=5 // result = result + 5;
// alert(result);

// var year = prompt('what year today?');
// if (year == 2018) {
// 	alert('good');
// }  else if (year < 2018) { 
// 	alert('wrong!');
//  		} 


// цикл ---------------------------------------------------
// var number = 0;
// while (number < 12) {
// 	alert('test');
// 	console.log(number);
// number++
// 	}


// var number = 0;
// do {
//   console.log(number);
// 	alert('test ' + number);
// number++
// } while (number < 12);

//  var number = 0;
// for (number = 0; number < 4; number++) {
// 	console.log('number = ', number);
// }


//не поняла этот пример!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var number = 0;
//  var arr = [ 'test', 1, 2, 'que'];
//  //console.log('hi', arr);
//  for (var number = 0; number < arr.length; number++) {
//  console.log('arr[number] = ', arr[number]);
//  console.log('number = ', number)
//   }


// debugger--------------------
// var array = [1, 2, 3, 4];
//  for (var i = 0; i < array.length; i++) {
//  	debugger;
//  	console.log(array[i]);
//console.log('i = ', i)
//  }


// ======= МОДУЛЬ 2 =====================================

//обьекты -----------------------------
// var student = {
// 	age: 18,
// 	name: 'Vasya',
// 	'my second name': 'Pupkin'
// }

// var key = 'my second name';
// // console.log(student.age);
// // console.log(student['my second name']);

// if (key in student){
// 	console.log(student[key]);
// }  else {
// 	console.log('no key');
// }

// пробежимся по обьекту --------
//  var student = {
// 	age: 18,
// 	name: 'Vasya',
// 	'my second name': 'Pupkin'
// }


// for (var key in student) {
// 	console.log('key', key);
// 	console.log('student[key]', student[key]);
// 	console.log('________');
// }

//  что бы вывести все ключи сразу
// var keysList = Object.keys(student);
// console.log(keysList);
 

 // дз 1-2
// function pow(x, n) {
//   ...
// }
/*======================== Сheck the number ==========================*/

//   var number = prompt('Введите число:', '');
//   var rank = prompt('Введите степень:', '');

// alert(number,rank)


do {
var number = prompt('Введите число:', '');
var rank = prompt('Введите степень:', '');
} while  ( !(isNumeric(number) && isNumeric(rank)) );

if(rank < 0) {
	alert('Степень ' + rank + 
			'не поддерживается, введите число, больше 0');
} else {
	console.log( numPow(number, rank) );
}

/*============================= Functions ===========================*/
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function numPow(number, rank) {
	var result = 1;

	for (var i = 0; i < rank; i++) {
		result *= number;
	}

	return result;
} 




// document.write(Math.pow(3, 4));

// function exp(base, exponent) {
//   exponent = Math.round(exponent);
//   if (exponent == 0) {
//     return 1;
//   }
//   if (exponent < 0) {
//     return 1 / exp(base, -exponent);
//   }
//   if (exponent > 0) {
//     return base * exp(base, exponent - 1)
//   }
// }