// 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'


let data = new Date();
let day = data.getDay();
let month = data.getMonth();
month = month < 10 ? "0" + month : month;
let date = data.getDate();
date = date < 10 ? "0" + date : date;
let fullYear = data.getFullYear();
let time = data.getTime();
let hour = data.getHours();
hour = hour < 10 ? "0" + hour : hour;
let minutes = data.getMinutes();
minutes = minutes < 10 ? "0" + minutes : minutes;
let seconds = data.getSeconds();
seconds = seconds < 10 ? "0" + seconds : seconds;

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
let timerIdOne = setInterval(() => console.log('Сегодня ' + day + " " + date + " " + 'октября' + " " + fullYear + " " + 'года, ' + hour + " " + getNoun(0, 'час', 'часа', 'часов') + " " + minutes + " " + 'минут' + " " + seconds + " " + 'секунды'), 1000);
setTimeout(() => { clearInterval(timerIdOne); }, 1000)

let timerIdTwo = setInterval(() => console.log(date + "." + month + "." + fullYear + " " + '-' + " " + hour + ":" + minutes + ":" + seconds), 1000);
setTimeout(() => { clearInterval(timerIdTwo); }, 1000)