// ---3--- //
const userName = prompt("Как вас зовут?");
const userAge = Number(prompt("Сколько вам лет?").replaceAll(" ", ""));
const noSpaces = userName.trim().toLowerCase();
console.log(noSpaces);
alert("Вас зовут " + noSpaces + " и вам " + userAge + " лет");
