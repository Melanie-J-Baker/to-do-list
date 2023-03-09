import { projectLibrary } from "./index";
import { currentProject } from "./logic";
import {
  createProjBtnListeners,
  createTaskBtnListeners,
} from "./dynamicListeners";
import moment from "moment";

const projectDiv = document.querySelector(".projects-main");
const projectMainHead = document.querySelector(".main-heading");
const tasksDiv = document.querySelector(".tasks");

function renderProjects() {
  _removeProjects();
  projectLibrary.forEach((project, index) => {
    const projects = document.createElement("div");
    projects.dataset.value = index;
    projects.classList.add("project");
    if (project.current) {
      projects.classList.add("current");
    }
    projects.textContent = project.name;

    projectDiv.appendChild(projects);
  });
  createProjBtnListeners();
}

function _removeProjects() {
  projectDiv.innerHTML = "";
}

function renderHead() {
  projectMainHead.textContent = currentProject().name;
  projectMainHead.dataset.value = currentProject();
}

function renderToDos() {
  _removeTasks();
  currentProject().toDos.forEach((task, index) => {
    const toDo = document.createElement("div");
    toDo.classList.add("task");
    toDo.dataset.value = index;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    if (task.complete) {
      checkbox.classList.add("checked");
    }
    toDo.appendChild(checkbox);

    const toDoName = document.createElement("p");
    toDoName.classList.add("task-text");
    toDoName.textContent = task.name;
    toDo.appendChild(toDoName);

    const toDoDate = document.createElement("p");
    toDoDate.classList.add("due-date");
    toDoDate.textContent = moment(task.date, "DD/MM/YY").fromNow();
    toDo.appendChild(toDoDate);

    const toDoPriority = document.createElement("img");
    toDoPriority.classList.add("priority-image");
    toDoPriority.alt = "Priority level";
    if (task.priority == "high") {
      toDoPriority.src = "./assets/high.svg";
    } else if (task.priority == "medium") {
      toDoPriority.src = "./assets/medium.svg";
    } else {
      toDoPriority.src = "./assets/low.svg";
    }
    toDo.appendChild(toDoPriority);

    const toDoEdit = document.createElement("img");
    toDoEdit.classList.add("edit-task");
    toDoEdit.alt = "Edit task";
    toDoEdit.src = "./assets/edit.svg";
    toDo.appendChild(toDoEdit);

    const toDoDelete = document.createElement("img");
    toDoDelete.classList.add("del-task");
    toDoDelete.alt = "Delete task";
    toDoDelete.src = "./assets/delete.svg";
    toDo.appendChild(toDoDelete);

    tasksDiv.appendChild(toDo);
  });
  createTaskBtnListeners();
}

function _removeTasks() {
  tasksDiv.innerHTML = "";
}

export { renderProjects, renderHead, renderToDos };
