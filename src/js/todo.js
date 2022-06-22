const todoList = document.querySelector('.todo');

const renderTodo = (todo) => {
  const item = document.createElement('li');
  item.setAttribute('class', 'todo__item');
  item.setAttribute('id', `${todo.id}`);
  item.innerHTML = `<span data-testid="todoItem" class="todo__span">${todo.input}</span>`;
};

const addTodo = (input) => {
  const todo = {
    input,
    id: Date.now(),
  };
  renderTodo(todo);
};

const todoToggle = (id) => {
  const item = document.getElementById(id);
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'button button--delete');
  deleteButton.setAttribute('data-testid', 'btnDeleteTodo');
  deleteButton.innerHTML = 'Remove';
  if (item.className === 'todo__item') {
    item.className = 'todo__item--completed';
    if (item.childNodes.length === 1) {
      item.appendChild(deleteButton);
      return null;
    }
    return null;
  }
  if (item.className === 'todo__item--completed') {
    item.className = 'todo__item';
    return null;
  }
  return null;
};

const form = document.querySelector('.input-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('.input-form__input');
  const string = input.value;
  if (string === '') {
    return null;
  }
  addTodo(string);
  input.value = '';
  return null;
});

todoList.addEventListener('click', (e) => {
  if (e.target.className === 'todo__item'
    || e.target.className === 'todo__item--completed') {
    return todoToggle(e.target.id);
  }
  if (e.target.className === 'todo__span') {
    return todoToggle(e.target.parentElement.id);
  }
  if (e.target.className === 'button button--delete') {
    return e.target.parentElement.remove();
  }
  return null;
});

