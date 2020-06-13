let linkElement = document.createElement('a');
linkElement.setAttribute('href','https://github.com/jader-germano/study');
linkElement.setAttribute('title','Git do Jader');

let textElement = document.createTextNode('Acesso ao repositório deste projeto.');
linkElement.appendChild(textElement);

let containerElement = document.querySelector('#app');
containerElement.appendChild(linkElement);

let inputElement = document.querySelector('#nome');
containerElement.removeChild(inputElement);