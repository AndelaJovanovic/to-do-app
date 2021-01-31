const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

todoButton.addEventListener('click', addTodo)

function addTodo (e){
    e.preventDefault()
    console.log('are you there?')

    const todoContainer = document.createElement('div')
    todoContainer.classList.add('todo')

    const addTodo = document.createElement('li')
    addTodo.innerText = todoInput.value
    addTodo.classList.add('todo-item')
    todoContainer.appendChild(addTodo)

    // COMPLETED BUTTON
    const completed = document.createElement('button')
    completed.innerHTML = '<i class="fas fa-check"></i>'
    completed.classList.add("completed-button")
    todoContainer.appendChild(completed)

     // ELIMINATE BUTTON
     const eliminate = document.createElement('button')
     eliminate.innerHTML = '<i class="far fa-trash-alt"></i>'
     eliminate.classList.add("eliminate-button")
     todoContainer.appendChild(eliminate)

     //ADD TO LIST
     todoList.appendChild(todoContainer)
}