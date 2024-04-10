//in app.js without local stroage 

let button = document.getElementById('add');
let input = document.getElementById('input');
let todoList = document.getElementById('todoList')

let todos = [];
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo => addtodo(todo))

}

button.addEventListener('click', () => {
  todos.push(input.value)
  localStorage.setItem('todos',JSON.stringify(todos))

  addtodo(input.value)   //down la irukura addtodo fn aa inga cl panirukom
  input.value = []
})


function addtodo(todo)
{
    let para = document.createElement('p');
    para.innerText = todo;  //input aa ena kudukurangalo atha paara la add pandrathuku intha comment
    todoList.appendChild(para)


    para.addEventListener('click',()=>{
       para.style.textDecoration = 'line-through'
       remove(todo)

    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}

function remove(todo)
{
    let index = todos.indexOf(todo)
    if(index>-1)
    {
        todos.splice(index,1);
    }
    localStorage.setItem('todos',JSON.stringify(todos))  //local storage layum remove pandrathuku
}