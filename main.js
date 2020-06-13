var nomes = ["Diego", "Gabriel", "Lucas"];

let boxElement = document.querySelector(   '#app');

for (let nome of nomes) {
    let itemUlElement = document.createElement('ul');
    let textElement = document.createTextNode(nome);
    itemUlElement.appendChild(textElement);
    boxElement.appendChild(itemUlElement)
}