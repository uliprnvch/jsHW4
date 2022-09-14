// 1. Сгенерировать 10 миллионов псевдослучайных чисел в диапазоне от 3 до 7 включительно (используя метод Math.random) и создать объект в котором ключем является сгенерированное число, а значением количество раз, которое это число появлялось из генератора.
const numbers = Array.from({length: 10000000}, () => Math.floor(Math.random() * 5 ) + 3);

let couner3 = 0;
let couner4 = 0;
let couner5 = 0;
let couner6 = 0;
let couner7 = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) {
    couner3++;
  } else if (numbers[i] === 4) {
    couner4++;
  } else if (numbers[i] === 5) {
    couner5++;
  } else if (numbers[i] === 6) {
    couner6++;
  } else if (numbers[i] === 7) {
    couner7++;
  } 
  
}

console.log(couner3);
console.log(couner4);
console.log(couner5);
console.log(couner6);
console.log(couner7);

let obj = {
  3: couner3,
  4: couner4,
  5: couner5,
  6: couner6,
  7: couner7,
}

console.log(obj);
console.log(couner3 + couner4 + couner5 + couner6 + couner7);

// 2. Решить задачу Ханойская башня: описание - https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D0%BD%D0%BE%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%B1%D0%B0%D1%88%D0%BD%D1%8F. Должна быть функция, принимающая количество уровней, ответом должно быть количество ходов.
function solvePuzzle(count) {
    let result = 2 ** count - 1;
    console.log(result);
  }
  
  solvePuzzle(5);