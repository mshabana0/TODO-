console.log("hello java script")
const todoInbut = document .querySelector(".task-input")
const todoBtn = document .querySelector(".tack-btn")
const todoResult = document .querySelector(".tack-result")
function addTodo(e){
    e.preventDefault();
    console. log(todoInbut .value)
    todoInbut .value = ''
}
todoBtn .addEventListener('click' ,addTodo)