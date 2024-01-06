function addItem() {
  const newItemInput = document.getElementById('new-item');
  const newItemText = newItemInput.value.trim();

  if (newItemText !== '') {
    const todoList = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.textContent = newItemText;
    todoList.appendChild(listItem);
    newItemInput.value = '';
  }
}
