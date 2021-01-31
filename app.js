const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

todoButton.addEventListener('click', addTodo)

const addTodo = (e) => {
    e.preventDefault()
    console.log('are you there?')
    const todoContainer = document.createElement('div')
    todoContainer.classList.add('todo')

    const addTodo = document.createElement('li')
    addTodo.innerText = 'hello, task'
    addTodo.classList.add('todo-item')
    todoContainer.appendChild(addTodo)
}