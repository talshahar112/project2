const taskInput = document.querySelector(".taskInput")
const dateInput = document.querySelector(".dateInput")
const timeInput = document.querySelector(".timeInput")
const addButton = document.querySelector(".add")
const clearButton = document.querySelector(".clear")
const taskContainer = document.querySelector(".taskContainer")

    window.addEventListener("load", function() {
      loadTasksFromLocalStorage();
    });

addButton.addEventListener("click", function(){
const taskObject = {
taskInput: taskInput.value,
dateInput: dateInput.value,
timeInput: timeInput.value,
};

if (taskObject.taskInput==""){
alert("input task name")
return
}

if (taskObject.dateInput==""){
alert("input dateInput")
return
}

if (taskObject.timeInput==""){
alert("input timeInput")
return
}

else {
createHtmlItem(taskObject);
saveTaskToLocalStorage(taskObject);
}
});

function createHtmlItem (taskObject){
const taskDiv = document.createElement("div");
taskDiv.className = "taskDiv"
taskContainer.appendChild(taskDiv);

const taskInput1 = document.createElement("textarea");
taskInput1.className = "taskText";
taskInput1.readOnly = true;
taskDiv.appendChild(taskInput1);
taskInput1.innerText = taskObject.taskInput;

const dateInput1 = document.createElement("p");
dateInput1.className = "dateText";
taskDiv.appendChild(dateInput1);
dateInput1.innerText = taskObject.dateInput;

const time1 = document.createElement("p");
time1.className = "timeText";
taskDiv.appendChild(time1);
time1.innerText = taskObject.timeInput;

const deleteButton = document.createElement("button");
deleteButton.className = "deleteButton bi bi-file-excel-fill"

taskDiv.appendChild(deleteButton)
deleteButton.addEventListener("click", function(){
taskContainer.removeChild(taskDiv);
removeFromLocalStorage(taskObject);
});

clearInput()
}

clearButton.addEventListener("click", function(){
      if (confirm("Are you sure?") == true) {
    localStorage.clear()
location.reload()
}
else{
    return
}
  

taskContainer.removeChild(taskDiv);
removeFromLocalStorage(taskObject);
    });


    function saveTaskToLocalStorage(taskObject) {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(taskObject);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function removeFromLocalStorage(taskObject) {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks = tasks.filter(task => task.taskInput !== taskObject.taskInput);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

function clearInput(){
taskInput.value=""
dateInput.value=""
timeInput.value=""
}

    function loadTasksFromLocalStorage() {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.forEach(task => {
        createHtmlItem(task);
      });
    }