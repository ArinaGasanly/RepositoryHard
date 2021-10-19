// 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'


let data = new Date();
let day = data.getDay();
let month = data.getMonth();
let date = data.getDate();
let fullYear = data.getFullYear();
let time = data.getTime();
let hour = data.getHours();
let minutes = data.getMinutes();
let seconds = data.getSeconds();


switch (day) {
  case 0: day = "понедельник,"; break;
  case 1: day = "вторник,"; break;
  case 2: day = "среда,"; break;
  case 3: day = "четверг,"; break;
  case 4: day = "пятница,"; break;
  case 5: day = "суббота,"; break;
  case 6: day = "воскресенье,"; break;
}

function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n == 0 && n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}



//console.log('Сегодня ' + day + " " + date + " " + 'октября' + " " + fullYear + " " + 'года, ' + hour + " " + 'часа' + " " + minutes + " " + 'минут' + " " + seconds + " " + 'секунды');
console.log('Сегодня ' + day + " " + date + " " + 'октября' + " " + fullYear + " " + 'года, ' + hour + " " + getNoun(0, 'час', 'часа', 'часов') + " " + minutes + " " + 'минут' + " " + seconds + " " + 'секунды');
console.log(date + "." + month + "." + fullYear + " " + '-' + " " + hour + ":" + minutes + ":" + seconds );