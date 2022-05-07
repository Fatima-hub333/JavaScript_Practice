const newTask = document.querySelector('#new-task-input');
const addTaskBtn = document.querySelector('.add-task-btn');
const removeCompleteBtn = document.querySelector('.remove-complete-btn');
const taskList = document.querySelector('.task-list');
const taskTemplate = document.querySelector('#task-template');
let id = 1;

let taskData = JSON.parse(localStorage.getItem('taskData')) || [];
// console.log(taskData);

function addTask(data) {
  const taskElement = document.importNode(taskTemplate.content, true);
  const checkbox = taskElement.querySelector('input');
  checkbox.id = id;
  const label = taskElement.querySelector('label');
  label.htmlFor = id;
  label.append(data.description);
  taskList.appendChild(taskElement);
  newTask.value = '';
  id += 1;
}

function inputValid() {
  return newTask.value !== '';
}

const renderData = () => {
  taskData.forEach((data) => addTask(data));
};
renderData();

newTask.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && inputValid()) {
    const data = {
      description: newTask.value,
      completed: false,
      index: id,
    };
    addTask(data);
    taskData.push(data);
    localStorage.setItem('taskData', JSON.stringify(taskData));
  }
});

addTaskBtn.addEventListener('click', () => {
  if (inputValid()) {
    const data = {
      description: newTask.value,
      completed: false,
      index: id,
    };
    addTask(data);
    taskData.push(data);
    localStorage.setItem('taskData', JSON.stringify(taskData));
  }
});

removeCompleteBtn.addEventListener('click', () => {
  const tasks = document.querySelectorAll('.task');
  const deleted = [];
  tasks.forEach((task) => {
    const { checked } = task.querySelector('input');
    if (checked) {
      deleted.push(Number(task.querySelector('label').htmlFor));
      task.remove();
    }
  });
  taskData = taskData.filter((data) => {
    console.log(deleted);
    return !deleted.includes(data.index);
  });
  localStorage.setItem('taskData', JSON.stringify(taskData));
});
