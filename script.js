// 1 задание
const arr = ["216938", "443011", "28738238923", "4967164", "48309787", "28738538923", "26767162"];

const filterValues = (digit) => {
  return arr.filter(data => {
    return data.indexOf(digit) > -1;
  });
}
console.log(filterValues('4','2'));


// 2 задание

let n = 100;

isPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue isPrime; 
  }

  console.log('Число :' + i + ' ' + ' Делители этого числа: 1 и ' + i);
}

