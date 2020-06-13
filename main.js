var minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/jader-germano');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro requisição')
                }
            }
        }
    })
}

minhaPromise()
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.warn(error)

    })

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function print(obj) {
    return `O usuário mora em ${obj.cidade} / ${obj.uf},
         no bairro ${obj.bairro}, na rua "${obj.rua}" com nº ${obj.numero}.`;
}

// Ex 1
console.log(print(endereco));


var minhaPromise = function (x, y) {
    let index = x;
    let pairNumbers = [];
    while (index <= y) {
        if ((index % 2) === 0) {
            pairNumbers = [...pairNumbers, index]

        }
        index++;
    }
    return pairNumbers;
}
console.log(minhaPromise(32, 321));


function temHabilidade(skills) {
    for (let key of skills) {
        if (key === "Javascript") {return true}
    }
    return false;
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));


function experiencia(anos) {
    let map = new Map();
    map.set(1, 'Iniciante');
    map.set(3, 'Intermediário');
    map.set(6, 'Avançado');
    map.set(7, 'Jedi Master');
    if (anos <= 1) {
        return map.get(1);
    }
    if (anos < 2 && 1 > anos) {
        return map.get(3);
    }
    if (anos < 5 && 3 > anos) {
        return map.get(5);
    }
    if (anos > 6) {
        return map.get(7);
    }
}

var anosEstudo = 7;
console.log(experiencia(anosEstudo));
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master


function print() {
    var usuarios = [
        {
            nome: "Diego",
            habilidades: ["Javascript", "ReactJS", "Redux"]
        },
        {
            nome: "Gabriel",
            habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
        }
    ];

    for (let key of usuarios) {
         console.log(`O ${key.nome} possui as habilidades:${key.habilidades.join(',')}`);
    }
}
print();
