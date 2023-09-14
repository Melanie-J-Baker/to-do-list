import { editTask } from "./DOM.js";
import {
  changeCurrentProject,
  removeProject,
  deleteTask,
  storeProjects,
} from "./logic.js";
import { renderProjects } from "./render.js";

function createProjBtnListeners() {
  let projects = document.querySelectorAll(".project");
  projects.forEach((project) =>
    project.addEventListener("click", function (e) {
      changeCurrentProject(e.target.dataset.value);
      storeProjects();
    })
  );

  let delIcon = document.querySelector(".del-project");
  let mainHead = document.querySelector(".main-heading");
  let tasksDiv = document.querySelector(".tasks");
  delIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    removeProject(e.target.dataset.value);
    storeProjects();
    mainHead.textContent = "";
    tasksDiv.innerHTML = "";
    renderProjects();
  });
}

function createTaskBtnListeners() {
  let toDoName = document.querySelectorAll(".task-text");
  toDoName.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      editTask.show(e.target.parentNode.dataset.value);
    })
  );

  let toDoDate = document.querySelectorAll(".due-date");
  toDoDate.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      editTask.show(e.target.parentNode.dataset.value);
    })
  );

  let toDoPriority = document.querySelectorAll(".priority-image");
  toDoPriority.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      editTask.show(e.target.parentNode.parentNode.dataset.value);
    })
  );

  let toDoEdit = document.querySelectorAll(".edit-task");
  toDoEdit.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      editTask.show(e.target.parentNode.parentNode.dataset.value);
    })
  );

  let toDoDelete = document.querySelectorAll(".del-task");
  toDoDelete.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      deleteTask(e.target.parentNode.parentNode.dataset.value);
      storeProjects();
    })
  );

  let editCancelBtn = document.querySelector(".cancel-update-task");
  if (editCancelBtn) {
    editCancelBtn.addEventListener("click", editTask.hide);
  }

  let updateBtn = document.querySelector(".update-task");
  if (updateBtn) {
    updateBtn.addEventListener("click", function (e) {
      editTask.submit(e.target.parentNode.parentNode.dataset.value);
    });
  }
}

export { createProjBtnListeners, createTaskBtnListeners };
