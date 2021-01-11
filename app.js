//selectors

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list');
//console.log(todoInput, todoButton, todoList);

//event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//functions

function addTodo(event) {
    //prevent form from submiting
    event.preventDefault();

    //create div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create li and append it to div
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //clear input
    todoInput.value = '';

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

function deleteCheck(event) {
    const item = event.target;

    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
