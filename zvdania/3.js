// ---3--- //

const userName = prompt("как звать та тя").replaceAll(" ", "");
const noSpaces = userName.trim().toLowerCase();
console.log(noSpaces);
alert("Вас зовут " + noSpaces);
