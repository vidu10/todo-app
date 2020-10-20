const todoInput=document.queryselector('.todo-input');
const todoButton=document.queryselector('.todo-button');
const todoList=document.queryselector('.todo-list');
todoButton.addEventListener('click', addTodo);

function addTodo(event){
	event.preventDefault();
	const todoDiv=document.createElement("div");
	todoDiv.classList.add("todo");
	
	const newTodo=document.createElement("li");
	newTodo.innerText="hey";
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);

	const completeButton= document.createElement("button");
	completeButton.innerHTML='<i class="fas fa-check"></i>';
	completeButton.classList.add("complete-btn");
	todoDiv.appendChild(completeButton);

	const delButton=document.createElement("button");
	delButton.innerHTML='<i class="fas fa-trash"></i>';
	delButton.classList.add("complete-btn");
	todoDiv.appendChild(delButton);

	todoList.appendChild(todoDiv);

}
