function addTask() {
  let taskInput = document.getElementById("task");
  let taskValue = taskInput.value.trim();
  if (taskValue === "") return;

  let li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  let span = document.createElement("span");
  span.textContent = taskValue;
  span.className = "editable";
  span.setAttribute("contenteditable", "true");
  span.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      span.blur();
    }
  });

  let div = document.createElement("div");

  let editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "btn btn-warning btn-sm me-2";
  editButton.onclick = function () {
    span.focus();
  };

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Hapus";
  deleteButton.className = "btn btn-danger btn-sm";
  deleteButton.onclick = function () {
    li.remove();
  };

  div.appendChild(editButton);
  div.appendChild(deleteButton);
  li.appendChild(span);
  li.appendChild(div);

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
