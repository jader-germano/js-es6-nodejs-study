var nomes = ["Diego", "Jader", "amendoim", "Lucas"];

let appElement = document.querySelector('#app');

let inputElement = document.createElement('input');

let btnElement = document.createElement('button');

async function loadList() {
    let ulElements = document.querySelector('#list');
    ulElements && appElement.removeChild(ulElements);

    let itemUlElement = document.createElement('ul');
    itemUlElement.setAttribute('id', 'list');
    for (let nome of nomes) {
        let itemLiElement = document.createElement('li');
        let textElement = document.createTextNode(nome);
        itemLiElement.appendChild(textElement);
        itemUlElement.appendChild(itemLiElement);
        appElement.appendChild(itemUlElement);
    }
}

function createButton() {
    inputElement.setAttribute('text', 'text');
    inputElement.setAttribute('name', 'name');
    btnElement.style.width = 90;
    btnElement.style.color = '#3e3c3c';
    btnElement.style.height = 30;
    btnElement.style.padding = 15;
    btnElement.style.borderStyle = 'none';
    btnElement.style.margin = 20;
    btnElement.style.borderRadius = '15%';
    btnElement.style.backgroundColor = '#d4cfcf';
    let textInputElement = document.createTextNode('Insira');
    btnElement.appendChild(textInputElement);
}

btnElement.onclick = async function () {

    if (!inputElement.value) {
        alert('Preencha o campo de texto');
        return
    }
    nomes = [...nomes, inputElement.value];
    inputElement.value = '';
    await loadList();
}

appElement.appendChild(inputElement);

appElement.appendChild(btnElement);

loadList();
createButton();
