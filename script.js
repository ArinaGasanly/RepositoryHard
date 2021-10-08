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



const lang2 = [
  ['en', 'ru']
];
console.log(lang2[0][0]);
console.log(lang2[0][1]);


// 2 задание

const namePerson = prompt('Как зовут?', '');
const message = (namePerson == 'Александр') ? 'преподаватель' :
  (namePerson == 'Артём') ? 'директор' : 'Всё ещё ожидаю твой ответ!';
console.log(message);