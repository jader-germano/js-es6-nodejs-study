let linkElement = document.createElement('a');
linkElement.setAttribute('href','https://github.com/jader-germano/study');

let textElement = document.createTextNode('Acesso ao repositório deste projeto.');
linkElement.appendChild(textElement);

let containerElement = document.querySelector('#app');
containerElement.appendChild(linkElement);

/**
 *  <a href="https://github.com/jader-germano/study">Acesso ao repositório do projeto</a>*/