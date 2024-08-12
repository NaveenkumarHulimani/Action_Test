const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const todoText = todoInput.value;
  if (todoText) {
    const li = document.createElement('li');
    li.textContent = todoText;
    todoList.appendChild(li);
    todoInput.value = '';
  }
});
