const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    
    const inputValue = input.value.trim()

    
    if (inputValue === '') {
        alert('Пустоту нельзя добавлять!')
        return 
    }
  
    const div = document.createElement('div')
    const text = document.createElement('h3')
    const divButtons = document.createElement('div')
    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')

    
    div.className = 'block_text'
    divButtons.className = 'div_buttons'
    deleteButton.className = 'delete_button'
    editButton.className = 'edit_button'

    
    deleteButton.textContent = 'delete'
    editButton.textContent = 'edit'

    
    deleteButton.onclick = () => div.remove()

    
    editButton.onclick = () => {
    
        const editText = prompt(`EDIT ${text.textContent}`).trim()    
        if (editText !== '') {
            text.textContent = editText
        } else {
            alert('нельзя менять на пустоту')
        }
    }

    text.textContent = inputValue
  
    text.addEventListener('click', () => {
        text.classList.toggle('completed')
    })

    divButtons.append(deleteButton, editButton)
    div.append(text, divButtons)
    todoList.prepend(div)
   
    input.value = ''
}
createButton.onclick = createTodo

window.onkeydown = (event) => {
    if (event.keyCode === 13) {
        createTodo()
    }
}
