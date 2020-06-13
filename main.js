function addBox() {
    let boxElement = document.createElement('div');
    boxElement.style.width = 100;
    boxElement.style.height = 100;
    boxElement.style.padding = 20;
    boxElement.style.margin = 20;
    boxElement.style.backgroundColor = '#f00';
    boxElement.onmouseover = function () {
        boxElement.style.backgroundColor = getRandomColor();
    }
    return boxElement;
}


function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Ex 1
let containerElement = document.createElement('div');
containerElement.style.display = 'flex';
containerElement.style.justifyContent = 'center'
containerElement.style.columns = 12;
containerElement.style.width = 100;
containerElement.style.opacity = 'auto';

let btnElement = document.createElement('button');
btnElement.setAttribute('id', 'btn');
btnElement.setAttribute('title', 'Clique Aqui');
btnElement.style.width = 90;
btnElement.style.color = '#3e3c3c';
btnElement.style.height = 30;
btnElement.style.padding = 15;
btnElement.style.borderStyle = 'none';
btnElement.style.margin = 20;
btnElement.style.borderRadius = '15%';
btnElement.style.backgroundColor = '#d4cfcf';

let appElement = document.querySelector('#app');
appElement.style.display = 'flex';
appElement.style.columns = 12;
appElement.style.justifyContent = 'baseline';
appElement.style.flexWrap = 'wrap';

containerElement.appendChild(btnElement);
appElement.appendChild(containerElement);

//Ex. 1

btnElement.onclick = function () {
    appElement.appendChild(addBox());
}
