const form = document.querySelector('.input-form');
const taskInput = document.querySelector('.input-form__input');
const todoList = document.querySelector('.todo');

let state = {
    todoList: [],
}

const itemTemplate = (task) => `<li
  class="todo__item ${task.complete && 'todo-list-task__done'}"
    id="${task.id}" 
    onclick="markComplete(${task.id})">
    <span class="data-testid="todoItem" class="todo__span"">${task.task}</span>
    ${removeButton(task)}
  </li>`;

const render = (htmlString, el) => {
    el.innerHTML += htmlString;
};


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = {
        id: Date.now(),
        task: taskInput.value,
        complete: false, 
    }
    state.tasks = [...tasks, task];
    const newTask = itemTemplate(task)
    render(newTask.innerHTML, todoList)
})