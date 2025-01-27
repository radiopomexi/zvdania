// ---2--- //
const Myname = "дима";
const programmingLanguage = "java script";
const CourseCreatorName = "Никита Михайлович";
const ReasonText = "не знаю";
const numberoffMoth = "маленько";

let result2 = `Всем привет, меня зовут ${Myname}, сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${CourseCreatorName}, Я хочу стать веб разработчиком, потому что ${ReasonText}, до этого я изучал ${programmingLanguage} ${numberoffMoth} месяцев. Я уверен что пройду этот курс до конца.`;
result2 = result2.replaceAll("java script", programmingLanguage.toUpperCase());

const long = result2.length;
console.log("Первый символ:", result2[0]);
console.log("Последний символ:", result2[long - 1]);
console.log(result2);
