const todoInput=document.querySelector('.Todo_input');
const todoButton=document.querySelector('.Todo-button');
const todoList=document.querySelector('.Todo-list');
const loginBox=document.querySelector('.loginbox');
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);
loginBox.addEventListener('click', todoPage);

function addTodo(event){
	event.preventDefault();
	const todoDiv=document.createElement("div");
	todoDiv.classList.add("todo");
	
	const newTodo=document.createElement("li");
	newTodo.innerText= todoInput.value;
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);

	const completeButton= document.createElement("button");
	completeButton.innerHTML='<i class="fas fa-check"></i>';
	completeButton.classList.add("complete-btn");
	todoDiv.appendChild(completeButton);

	const delButton=document.createElement("button");
	delButton.innerHTML='<i class="fas fa-trash"></i>';
	delButton.classList.add("trash-btn");
	todoDiv.appendChild(delButton);

	todoList.appendChild(todoDiv);

	//to clear input after inserting a value
	todoInput.value="";
}

function deleteCheck(e){
	const item=e.target;
	if(item.classList[0]==="trash-btn"){
		const todo=item.parentElement;
		todo.remove();
	}

	if(item.classList[0]==="complete-btn"){
		const todo=item.parentElement;
		todo.classList.toggle('Completed');
	}
}
