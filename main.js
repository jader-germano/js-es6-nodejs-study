let promise = function () {

    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/jader-germano');
        xhr.send(null);
        xhr.onreadystatechange = function () {
            // 4 = resposta pronta
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição.')
                }
            }
        }
    });
}
promise()
    .then(function (response) {console.log(response)})
    .catch(function (error) {console.error(error)});




