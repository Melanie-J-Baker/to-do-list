import { projectLibrary } from ".";
import { editTask } from "./DOM";
import {
  changeCurrentProject,
  removeProject,
  completed,
  incompleted,
  deleteTask,
  storeProjects,
} from "./logic";
import { renderToDos } from "./render";

function createProjBtnListeners() {
  let projects = document.querySelectorAll(".project");
  projects.forEach((project) =>
    project.addEventListener("click", function (e) {
      changeCurrentProject(e.target.dataset.value);
      storeProjects();
    })
  );

  let delIcon = document.querySelector(".del-project");
  delIcon.addEventListener("click", function (e) {
    removeProject(projectLibrary.findIndex((project) => project.current));
    storeProjects();
    e.stopPropagation();
  });
}

function createTaskBtnListeners() {
  let checkbox = document.querySelectorAll(".checkbox");
  checkbox.forEach((box) =>
    box.addEventListener("click", function (e) {
      if (e.target.classList.contains("checked")) {
        incompleted(e.target.parentNode.dataset.value);
      } else {
        completed(e.target.parentNode.dataset.value);
      }
      storeProjects();
      renderToDos();
    })
  );

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
