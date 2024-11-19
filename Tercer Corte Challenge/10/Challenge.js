class Todo {
    constructor(title, description, points) {
        this.title = title;
        this.description = description;
        this.points = points;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }

    printTodo() {
        const status = this.completed ? "Completada" : "Pendiente";
        console.log(`Título: ${this.title}`);
        console.log(`Descripción: ${this.description}`);
        console.log(`Puntos: ${this.points}`);
        console.log(`Estado: ${status}`);
        console.log('--------------------------');
    }
}

const todoList = [];

function addTodoToList(title, description, points) {
    const newTodo = new Todo(title, description, points);
    todoList.push(newTodo);
}

function removeTodoFromList(index) {
    if (index >= 0 && index < todoList.length) {
        todoList.splice(index, 1);
    } else {
        console.log("Índice fuera de rango.");
    }
}

function toggleTodoCompletion(index) {
    if (index >= 0 && index < todoList.length) {
        todoList[index].toggleComplete();
    } else {
        console.log("Índice fuera de rango.");
    }
}

function displayTodos() {
    if (todoList.length === 0) {
        console.log("No hay TODOs disponibles.");
    } else {
        console.log("Lista de TODOs:");
        todoList.forEach((todo, index) => {
            console.log(`TODO #${index + 1}:`);
            todo.printTodo();
        });
    }
}

// Ejemplo de uso de las nuevas funcionalidades
function TodoApp() {
    addTodoToList("Comprar comestibles", "Leche, Pan, Huevos y Frutas", 5);
    addTodoToList("Completar tarea", "Tarea de JavaScript", 10);
    addTodoToList("Hacer ejercicio", "Ejercicio de 30 minutos", 3);

    console.log("Inicial:");
    displayTodos();

    console.log("Marcando como completada la primera TODO...");
    toggleTodoCompletion(0);
    displayTodos();

    console.log("Eliminando la segunda TODO...");
    removeTodoFromList(1);
    displayTodos();
}

TodoApp();
