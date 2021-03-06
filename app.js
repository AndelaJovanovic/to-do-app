const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todos')

// ALL EVENT LISTENERS
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteTodo)
filterOption.addEventListener('click', filterTodo)

function addTodo (e){
    e.preventDefault()
    console.log('are you there?')

    const todoContainer = document.createElement('div')
    todoContainer.classList.add('todo')

    const addTodo = document.createElement('li')
    addTodo.innerText = todoInput.value
    addTodo.classList.add('todo-item')
    todoContainer.appendChild(addTodo)
    todoInput.value = ""

    // COMPLETED BUTTON
    const completed = document.createElement('button')
    completed.innerHTML = `<i class="fas fa-check"></i>`
    completed.classList.add("completed-button")
    todoContainer.appendChild(completed)

     // ELIMINATE BUTTON
     const eliminate = document.createElement('button')
     eliminate.innerHTML =`<i class="far fa-trash-alt"></i>`
     eliminate.classList.add("eliminate-button")
     todoContainer.appendChild(eliminate)

     //ADD TO LIST
     todoList.appendChild(todoContainer)

     //CLEAR INPUT AFTER TASK HAS BEEN ADDED
     todoInput.value = ""
}

//DELETE FUNCTION FOR TODOS
function deleteTodo(e){
    const item = e.target

    if(item.classList[0] === 'eliminate-button'){
       const todo = item.parentElement
       todo.classList.add("bye-task")
       todo.addEventListener('transitioned', e =>{
           todo.remove()
       })
    }

// MARK TODOS AS COMPLETED
if(item.classList[0] === 'completed-button'){
    const todo = item.parentElement
    todo.classList.toggle("done")
}
}

//FILTER ALL TASKS IN 3 CATEGORIES
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "undone":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    });
  }