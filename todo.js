let addBtn=document.getElementById("addBtn")
let todoItemsContainer=document.getElementById("todoItemsContainer")
let saveTodoButton=document.getElementById("saveTodoButton")

function getTodoListFromLocalStorage(){
    let getTodolist=localStorage.getItem("todoList");
    let parsedtodoList=JSON.parse(getTodolist);
    if(parsedtodoList===null){
        return [];
    }
    return parsedtodoList;

}
let todoList=getTodoListFromLocalStorage()


saveTodoButton.onclick=function(){
    localStorage.setItem("todoList",JSON.stringify(todoList))
}


function deleteTodoElement(todoId){
    let todoIdEl=document.getElementById(todoId)
    todoItemsContainer.removeChild(todoIdEl)

    let deleteElement=todoList.findIndex(function(each){
        let eachTodoId="todo"+each.uniqueNo;
        if(eachTodoId === todoId){
            return true;
        }
        return false;

    })
    todoList.splice(deleteElement,1);

}

inputElementStatusChange=function(labelId,checkboxId,todoId){
    let checkboxIdEl=document.getElementById(checkboxId)
    let labelidELement=document.getElementById(labelId);
    
    labelidELement.classList.toggle("checked",checkboxIdEl.checked)
    

    let index=todoList.findIndex(todo=>"todo"+todo.uniqueNo===todoId)
    if(index !== -1){
        todoList[index].ischecked = checkboxIdEl.checked;
    }
    localStorage.setItem("todoList", JSON.stringify(todoList));

}
let todoCount=todoList.length;
function onTodoAdd(){
    let userInputElement=document.getElementById("todoUserInput")
    let userInputValue=userInputElement.value;

    if(userInputValue===""){
        alert("Enter Valid Text");
        return;

    }
    todoCount=todoCount+1;
    let newTodo={
        text:userInputValue,
        uniqueNo:todoCount,
        ischecked:false,
    }
    todoList.push(newTodo);
    createAppendTod(newTodo);
    userInputElement.value = "";

}

addBtn.onclick=function(){
    onTodoAdd()
}



function createAppendTod(todo){
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    let todoElement=document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex","flex-row");
    todoElement.id=todoId
    todoItemsContainer.appendChild(todoElement);

    /// ### create checkbox
    let inputElement=document.createElement("input");
    inputElement.type="checkbox";
    inputElement.id=checkboxId
    inputElement.checked=todo.ischecked;
    inputElement.onclick=function(){
        inputElementStatusChange(labelId,checkboxId,todoId)
    }
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement)

    let labelContainer=document.createElement("div")
    labelContainer.classList.add("label-container","d-flex","flex-row");
    todoElement.appendChild(labelContainer);

    let lableElement=document.createElement("label")
    lableElement.setAttribute("for",checkboxId);
    lableElement.id=labelId;
    lableElement.classList.add("checkbox-label")
    lableElement.textContent=todo.text
    labelContainer.appendChild(lableElement)
     

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon=document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick=function(){
        deleteTodoElement(todoId)
    }
    deleteIconContainer.appendChild(deleteIcon)

}

for(let todo of todoList){
    createAppendTod(todo)
}