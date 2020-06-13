var nomes = ["Diego", "Gabriel", "Lucas"];

let appElement = document.querySelector('#app');

async function iterarLista() {
    let ulElement = document.getElementsByTagName('ul');

    for (const appElementElement of ulElement) {
        console.log(appElementElement);
        appElement.removeChild(appElementElement);
    }

    for (let nome of nomes) {
        let itemUlElement = document.createElement('ul');
        let textElement = document.createTextNode(nome);
        itemUlElement.appendChild(textElement);
        await appElement.appendChild(itemUlElement)
    }
}


let inputElement = document.createElement('input');
inputElement.setAttribute('text', 'text');
inputElement.setAttribute('name', 'name');

let btnElement = document.createElement('button');
btnElement.style.width = 90;
btnElement.style.color = '#3e3c3c';
btnElement.style.height = 30;
btnElement.style.padding = 15;
btnElement.style.borderStyle = 'none';
btnElement.style.margin = 20;
btnElement.style.borderRadius = '15%';
btnElement.style.backgroundColor = '#d4cfcf';
btnElement.onclick = async function () {
    if (!inputElement.value) {
        alert('Preencha o campo de texto');
        return
    }
    nomes = [...nomes, inputElement.value];
    inputElement.value = '';
    await iterarLista();
}

appElement.appendChild(inputElement);
appElement.appendChild(btnElement);

iterarLista();