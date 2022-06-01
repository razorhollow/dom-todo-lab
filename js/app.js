/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let toDoList


/*------------------------ Cached Element References ------------------------*/
const input = document.querySelector('#to-do-input')
const toDoButton = document.querySelector('#submit-button')
const list = document.querySelector('#todo-list')
const resetBtn = document.querySelector("#reset-button")
/*----------------------------- Event Listeners -----------------------------*/

toDoButton.addEventListener('click', addToDo)
resetBtn.addEventListener('click', reset)
list.addEventListener('click' , removeItem)
/*-------------------------------- Functions --------------------------------*/



function addToDo(event) {
  event.preventDefault()
  let currentToDo = input.value
  const li = document.createElement('li')
  if (currentToDo !== ""){
    li.textContent = currentToDo
    list.appendChild(li)
  } else {
    console.log('woops, your to do is blank')
  }
    input.value = ''
}

function reset() {
  //remove all items from list
  list.innerHTML = ''
  //clear the input field
  input.value = ''
}

function removeItem(event) {
  console.log('you clicked the li')
  event.target.remove() 

}