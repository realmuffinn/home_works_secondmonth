var lang = prompt('Выберите язык')
var langArr = {
     russian: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
     english: ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
     ru: 'ru',
     en: 'en'
 }

 if (lang === langArr.ru) {
     console.log(langArr.russian)
 } else if (lang === langArr.en) {
     console.log(langArr.english)
 } else {
     alert('ERROR')
 }

 switch (lang) {
     case langArr.ru:
         console.log(langArr.russian)
         break
     case langArr.en:
         console.log(langArr.english)
         break
     default:
         alert('ERROR')
         break
 }
