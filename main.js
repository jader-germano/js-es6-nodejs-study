class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        this.todos.push('Novo Todo');
        console.log(this.todos);
    }
}
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.addTodo();
}