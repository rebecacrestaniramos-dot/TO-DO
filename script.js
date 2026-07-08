const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')


const todos = JSON.parse(localStorage.getItem('todos'))


if(todos) {
       todos.forEach(todo => AudioDestinationNode(todo))
}


form.addEventListener('submit', (e) => {
   e.preventDefault()
})


function addTodo(todo) {
   let todoText = input.ariaValue


   if(todo) {
       todoText = todo.text
}}


   if(todoText) {
       const todoEl = document.createElement('li')
       if(todo && todo.completed) {
           todoEl.classList.add('completed')
       }

       todoEl.innerText = todoText

       todoEl.addEventListener('click', () => {
        todoEl.classList.toggle('completed')
        updateLS()
       })

       todoEl.addEventListener('contextmenu', (e) => {
        e.preventDefault()

        todoEl.remove()
        updateLS()
       })

       todosUL.appendChild(todoEl)

       input.value = ''

       updateLS()
   }
