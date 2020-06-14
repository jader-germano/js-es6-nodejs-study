let repos = [];
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

function renderRepo() {
    listElement.innerHTML = '';
    for (let repo of repos) {
        let ownerElement = document.createElement('li');

        let userLabelElement = document.createElement('label');
        userLabelElement.setAttribute('id', 'owner');
        let userLabelText = document.createTextNode('Owner: ');
        userLabelElement.appendChild(userLabelText);

        let userLinkElement = document.createElement('a');
        userLinkElement.setAttribute('href', `https://github.com/${repo.owner.login}`);
        let userLinkText = document.createTextNode(`${repo.owner.login} `);
        userLinkElement.appendChild(userLinkText);

        let accessLinkElement = document.createElement('a');
        accessLinkElement.setAttribute('href', `https://github.com/${repo.owner.login}/${repo.name}  `);
        let linkText = document.createTextNode('Acessar');
        accessLinkElement.appendChild(linkText);

        let accessLabelElement = document.createElement('label');
        accessLabelElement.setAttribute('id', 'repo');
        let accessLabelText = document.createTextNode('  Repo: ');
        accessLabelElement.appendChild(accessLabelText);

        let repoText = document.createTextNode(`${repo.name}  `);

        ownerElement.appendChild(userLabelElement);
        ownerElement.appendChild(userLinkElement);
        ownerElement.appendChild(accessLabelElement);
        ownerElement.appendChild(repoText);
        ownerElement.appendChild(accessLinkElement);

        listElement.appendChild(ownerElement);
        saveToStorage();
    }
}

function load() {
    listElement.innerHTML = '';
    let loadElement = document.createElement('li');
    let loadLabelElement = document.createElement('label');
    let loadLabelText = document.createTextNode('Carregando... ');
    loadLabelElement.appendChild(loadLabelText);
    loadElement.appendChild(loadLabelElement);
    listElement.appendChild(loadElement);
}

function errorSuccess(bool) {
    listElement.innerHTML = '';
    let notFoundElement = document.createElement('li');
    let notFoundLabelElement = document.createElement('label');
    let notFoundLabelText;
    bool ? notFoundLabelText = document.createTextNode(`Usuário ${inputElement.value} encontrado, porém, não possui repositórios.`)
        : notFoundLabelText = document.createTextNode(`Usuário ${inputElement.value} não encontrado.`);
    notFoundLabelElement.appendChild(notFoundLabelText);
    notFoundElement.appendChild(notFoundLabelElement);
    listElement.appendChild(notFoundElement);
}

function addRepo() {
    load();
    axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
        .then(function (response) {
            repos = response.data;
            !repos.length && errorSuccess(true);
            repos.length &&renderRepo();
        })
        .catch(function (error) {
            errorSuccess(false);
            console.error(error);
        });

    inputElement.value = '';

    saveToStorage();
}

buttonElement.onclick = addRepo;

function saveToStorage() {
    localStorage.setItem('list_name_repo', JSON.stringify(repos))
}

