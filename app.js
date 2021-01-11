//selectors

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list');
//console.log(todoInput, todoButton, todoList);

//event listeners

todoButton.addEventListener('click', addTodo);

//functions

function addTodo(event) {
    //prevent form from submiting
    event.preventDefault();

    //create div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create li and append it to div
    const newTodo = document.createElement('li');
    newTodo.innerText = 'Task';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //create buttons and appended to div
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append todo to list
    todoList.appendChild(todoDiv);

}
