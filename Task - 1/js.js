

//do {
// var number = prompt('Введите число:', '');
// var rank = prompt('Введите степень:', '');
//  while  ( true ); 
// ( !(isNumeric(number) && isNumeric(rank)) ); это условие точка остановки
//мы выполняем то что внутри while 'эта штука буде задалбывать пока вы не ведете цифру
// отличная надоедалка
// ============================= Functions ===========================
// function iNumber(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);

function numerPow() {
var number = prompt('Введите число:', '');
var rank = prompt('Введите степень:', '');
//	var result = 1;
// for (var i = 0; i < rank; i++) {
// 	result = result * number;
// }
var resultttt = Math.pow(number, rank)
	return resultttt;
} 
console.log( numerPow() );