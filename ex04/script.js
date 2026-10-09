const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const counter = document.getElementById("counter");

let total = 0;

function updateCounter() {
  counter.textContent = total;
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // mark as completed
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // delete task
  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    li.remove(); // remove
    total = total - 1;
    updateCounter();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  total = total + 1;
  updateCounter();

  taskInput.value = "";
  taskInput.focus();
}

addBtn.addEventListener("click", addTask);
//keydown
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});