document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  let tasks = [];
  let editingTaskId = null;

  /** Add or Edit a task */
  addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Enter the task");
      return;
    }

    // if edited task needs to be added
    if (editingTaskId) {
      handleEdit(editingTaskId, taskText);
    } else {
      /**
       * if new task needs to be added
       * adding a new task
       * pushing to overall task list
       *  */
      const task = { id: crypto.randomUUID(), text: taskText };
      tasks.push(task);
      renderTask(task);
    }

    // roll back to default state
    taskInput.value = "";
    addBtn.textContent = "Add";
    editingTaskId = null;
  });

  /** Event Delegation for handling task list edit and delete */
  taskList.addEventListener("click", function (event) {
    const target = event.target;
    const taskId = target.closest("li")?.dataset.id;
    if (target.classList.contains("editBtn")) {
      OnClickingEditBtn(taskId);
    } else if (target.classList.contains("deleteBtn")) {
      handleDelete(taskId);
    }
  });

  /**
   * When user clicks on edit button on specific task
   * The input field should be filled with task needs to be updated
   * The add button should change to edit button
   * The current edit task id should be updated to editingTaskId
   *  */
  function OnClickingEditBtn(taskId) {
    const task = tasks.find((task) => task.id === taskId);
    taskInput.value = task.text;
    addBtn.textContent = "Edit";
    editingTaskId = taskId;
  }

  /**
   *  The first line finds the task object in the tasks array by its ID.
   *  The second line task.text -> updates the text of that task object.
   *  The third line taskLi -> finds the corresponding <li> element in the DOM that displays this task.
   *  The fourth line updates the displayed text of the task in the DOM to reflect the changes made in the array.
   */
  function handleEdit(taskId, taskText) {
    const task = tasks.find((task) => task.id === taskId); // {id: '58534549-7e01-407f-9df6-9c3b85b8ebe9', text: 'Buy a milk'}
    task.text = taskText; // {id: '58534549-7e01-407f-9df6-9c3b85b8ebe9', text: 'Buy a bread'}
    const taskLi = taskList.querySelector(`[data-id="${taskId}"]`); // <li data-id="58534549-7e01-407f-9df6-9c3b85b8ebe9"><span>Buy a brea</span><button class="editBtn"></button>Edit<button class="deleteBtn">Delete</button></li>
    taskLi.querySelector("span").textContent = taskText;
  }

  /**
   * Delete a task
   *
   */
  function handleDelete(taskId) {
    tasks = tasks.filter((task) => task.id !== taskId);
    const taskLi = taskList.querySelector(`[data-id="${taskId}"]`);
    taskLi.remove();
  }

  // Render task
  function renderTask(task) {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.innerHTML = `
            <span>${task.text}</span>
            <button class="editBtn"><i class="material-icons">edit</i></button>
            <button class="deleteBtn"><i class="material-icons">delete</i></button>
        `;
    taskList.appendChild(li);
  }
});
