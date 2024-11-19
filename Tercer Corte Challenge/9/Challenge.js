class Todo {
    constructor(title, description, points) {
        this.title = title;
        this.description = description;
        this.points = points;
        this.completed = false; // Para el Challenge 10
    }

    printTodo() {
        console.log(`Título: ${this.title}`);
        console.log(`Descripción: ${this.description}`);
        console.log(`Puntos: ${this.points}`);
        console.log('--------------------------');
    }
}

const todoList = [];

function addTodoToList(title, description, points) {
    const newTodo = new Todo(title, description, points);
    todoList.push(newTodo);
}

function displayTodos() {
    if (todoList.length === 0) {
        console.log("No hay TODOs disponibles.");
    } else {
        console.log("Lista de TODOs:");
        todoList.forEach(todo => todo.printTodo());
    }
}

// Función principal que gestiona la app
function TodoApp() {
    addTodoToList("Comprar comestibles", "Leche, Pan, Huevos y Frutas", 5);
    addTodoToList("Completar tarea", "Tarea de JavaScript", 10);
    addTodoToList("Hacer ejercicio", "Ejercicio de 30 minutos", 3);

    displayTodos();
}

TodoApp();
