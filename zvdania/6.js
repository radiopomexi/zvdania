/// ---6--- //

let userText = prompt("Введите текст").trim();
let wordFromText = prompt("Введите слово из текста").trim();
let indexOfWord = userText.indexOf(wordFromText);

alert(`Текст: ${userText.slice(0, indexOfWord + wordFromText.length)}`);
