let taskInput = document.querySelector("#task");
let addTaskButton = document.querySelector("#add-task");
let taskList = document.querySelector("#task-list");


//Add
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
     taskItem.innerHTML = `${taskText}<button class="delete">Delete</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});
 //delete

taskList.addEventListener('click', (l) => {
    if (l.target.classList.contains('delete')) {
        l.target.parentElement.remove();
    }
});


    