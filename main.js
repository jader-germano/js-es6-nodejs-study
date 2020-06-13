// Formas de Referenciar tags da Dom QuerySelector
var inputElement = document.querySelector('input');
var allInputElements = document.querySelectorAll('input');

console.log(inputElement);
console.log(allInputElements);

// Formas de Referenciar tags da Dom QuerySelector
var btnElement = document.querySelector('button.botao');

btnElement.onclick = function() {
    let text = inputElement.value;
    alert(text);
}
console.log(inputElement);
console.log(allInputElements)

