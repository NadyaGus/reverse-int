module.exports = function reverse (n) {
  let string = n.toString(); // сделать число строкой
  let arrayString = string.split(''); // сделала массив 
  let reverseArray = arrayString.reverse();  // сделала реверс массив
  let rvsArrayToString = reverseArray.toString(); //сделала реверс массив строчкой
  let result = rvsArrayToString.replaceAll(',', ''); //результат с заменой запятой из массива

  return result.replaceAll('-', ''); // в тестах выскакивала ошибка с минусом, проще было вставить замену минуса на пустую строчку))
}
