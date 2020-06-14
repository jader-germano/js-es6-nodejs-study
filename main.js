//REST
const user = {
    name: 'Jader',
    age: '27',
    address: {
        city: 'Brasília',
        estate: 'DF',
    }
};

const { name, ...restUSer } = user;
console.log(name);
console.log(restUSer);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

function sum(a, ...params) {
    return a + params.reduce((total, next) => total + next);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

// SPREAD

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];

const arr3 = [...arr, ...arr1, ...arr2];
console.log(arr3);

const user2 = {
    name: 'Philipe',
    age: '27',
    address: {
        city: 'Brasília',
        estate: 'DF',
    }
};

const user3 = {...user2, name: 'Germano'};

console.log(user3);