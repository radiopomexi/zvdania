// ---4--- //

const userName = prompt("как ТЕБЯ зовУТ!?");
const userAge = Number(prompt("скика рокив те?").replaceAll(" ", ""));
const noSpaces = userName.trim().toLowerCase();
console.log(noSpaces);
alert("Вас зовут " + noSpaces + " и вам " + userAge + " лет");
