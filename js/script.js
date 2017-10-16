let addTask = document.getElementById('addTask');
let inputTask = document.getElementById('inputTask');
let taskList = document.getElementById('taskList');

let key = 'myTask';

let tasks = [];
if(localStorage.getItem(key) !== null){
    tasks = JSON.parse(localStorage.getItem(key));
    console.log(tasks);
    createTask();
}

addTask.onclick = function () {
    if(inputTask.value){
        writeToLocalStorage();
        createTask();
        inputTask.value = '';
        inputTask.placeholder = 'Start typing here to create a task...';
    } else {
        inputTask.placeholder = "The field can't be empty!";
    }
};

function writeToLocalStorage(){
    let temp = {};
    temp.task = inputTask.value;
    temp.check = false;
    let i = tasks.length;
    tasks[i] = temp;
    localStorage.setItem(key, JSON.stringify(tasks));
}

function createTask(){
    let out = '';
    for(let key in tasks){
        out += `<li class="list-group-item list-group-item-action outTask">${tasks[key].task}</li>`;
    }
    taskList.innerHTML = out;
}

let remove = document.querySelectorAll('.outTask');
for(let k of remove){
    console.log(k.innerHTML);
    k.addEventListener('click', function (e) {
        console.log(e.target);
        for(let j in tasks){
            if(tasks[j].check !== true && k.innerHTML === tasks[j].task){
                console.dir(j);
                let a = tasks.splice(j, 1);
                console.log(a);
                console.log(tasks);
                localStorage.setItem(key, JSON.stringify(tasks));
            }
        }
        e.target.remove();
    })
}

for(let j in tasks){
    if(tasks[j].check !== true && j.innerHTML === tasks[j].task){
        console.log(j);
    }
}

function removeTask(){
    let remove = document.querySelectorAll('.outTask');
    for(let key in tasks){
        if(tasks[key].check !== true){
            out += `<li class="list-group-item list-group-item-action outTask">${tasks[key].task}</li>`;
        }
    }
}