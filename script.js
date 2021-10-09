// 1 задание

const lang = prompt('Какой язык?', 'en, ru');
const ruDays = ('понедельник, вторник среда, четверг, пятница, суббота, воскресенье');
const enDays = ('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');


if (lang == 'ru') {
  console.log(ruDays);

} else (lang == 'en'); {
  console.log(enDays);

}


switch(lang) {
  case'ru':
  console.log(ruDays);
  break;
  case 'en':
  console.log(enDays);
  break;
  default:
  console.log('Нет никаких значений');
}



let map = new Map([
  ['ru', 'понедельник, вторник среда, четверг, пятница, суббота, воскресенье'],
  ['en', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
]);


console.log(map.get('ru') );
console.log(map.get('en') );


// 2 задание

const namePerson = prompt('Как зовут?', '');
const message = (namePerson == 'Александр') ? 'преподаватель' :
  (namePerson == 'Артём') ? 'директор' : 'Всё ещё ожидаю твой ответ!';
console.log(message);