console.log("hello java script")
const todoInbut = document.querySelector(".tack-input")
const todoBtn = document.querySelector(".tack-btn")
const todoResult = document.querySelector(".tack-result")


function addTodo(e){
    e.preventDefault();
    console.log(todoInbut.value)
    
    // create li
    const TodoLi = document.createElement("li")
    TodoLi.classList.add("border")
    TodoLi.classList.add("shadow")
    TodoLi.classList.add("my-2")

    // create h5
    const todotitle  = document.createElement("h5")
    todotitle.classList.add("ms-2")
    todotitle.classList.add("d-inline-block")
    todotitle.classList.add("w-75")
    todotitle.classList.add("text-light")
    todotitle.innerText = todoInbut.value
    TodoLi.appendChild(todotitle)
    const todocomplete  = document.createElement("button")
    todocomplete.classList.add("btn")
    todocomplete.classList.add("btn-primary")
    todocomplete.innerHTML = `<i class="fa-sharp fa-solid fa-check"></i>`
    TodoLi.appendChild(todocomplete)
    const tododelet = document.createElement("button")
    tododelet.classList.add("btn")
    tododelet.classList.add("btn-danger")
    tododelet.innerHTML = `<i class="fa-sharp fa-solid fa-trash"></i>`
    TodoLi.appendChild(tododelet)
    todoResult.appendChild(TodoLi)
    todoInbut.value =  ''

}

function toggleTodo(e){
    const item =e.target
    console.log(item.classList)
    if (item.classList[2] == 'fa-check'){
        console.log('completed task')
        item.parentElement.parentElement.classList.toggle('compelted')
    }else{
        console.log('deleted task')
        item.parentElement.parentElement.classList.toggle('delete')

    }
}





todoBtn.addEventListener('click' ,addTodo) 
todoResult.addEventListener('click',toggleTodo)





