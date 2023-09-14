import { projectLibrary } from "./index.js";
import { currentProject } from "./logic.js";
import {
  createProjBtnListeners,
  createTaskBtnListeners,
} from "./dynamicListeners.js";
import { format } from "date-fns";

import highIcon from "./assets/high.svg";
import medIcon from "./assets/medium.svg";
import lowIcon from "./assets/low.svg";
import editIcon from "./assets/edit.svg";
import delIcon from "./assets/delete.svg";

const projectDiv = document.querySelector(".projects-main");
const projectMainHead = document.querySelector(".main-heading");
const tasksDiv = document.querySelector(".tasks");
const delProject = document.querySelector(".del-project");

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
  projectMainHead.dataset.value = projectLibrary.findIndex(
    (project) => project.current
  );
  delProject.dataset.value = projectLibrary.findIndex(
    (project) => project.current
  );
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
    toDo.appendChild(checkbox);

    const toDoName = document.createElement("p");
    toDoName.classList.add("task-text");
    toDoName.textContent = task.name;
    toDo.appendChild(toDoName);

    if (task.date) {
      const toDoDate = document.createElement("p");
      toDoDate.classList.add("due-date");
      toDoDate.textContent = format(new Date(task.date), "dd/MM/yy");
      toDo.appendChild(toDoDate);
    }

    const taskIconsDiv = document.createElement("div");
    taskIconsDiv.classList.add("task-icons-div");
    toDo.appendChild(taskIconsDiv);

    const toDoPriority = document.createElement("img");
    toDoPriority.classList.add("priority-image");
    toDoPriority.alt = "Priority level";
    if (task.priority == "high") {
      toDoPriority.src = highIcon;
    } else if (task.priority == "medium") {
      toDoPriority.src = medIcon;
    } else {
      toDoPriority.src = lowIcon;
    }
    taskIconsDiv.appendChild(toDoPriority);

    const toDoEdit = document.createElement("img");
    toDoEdit.classList.add("edit-task");
    toDoEdit.alt = "Edit task";
    toDoEdit.src = editIcon;
    taskIconsDiv.appendChild(toDoEdit);

    const toDoDelete = document.createElement("img");
    toDoDelete.classList.add("del-task");
    toDoDelete.alt = "Delete task";
    toDoDelete.src = delIcon;
    taskIconsDiv.appendChild(toDoDelete);

    tasksDiv.appendChild(toDo);

    if (task.desc) {
      const toDoDesc = document.createElement("p");
      toDoDesc.classList.add("desc-text");
      toDoDesc.textContent = task.desc;
      tasksDiv.appendChild(toDoDesc);
    }
  });
  createTaskBtnListeners();
}

function _removeTasks() {
  tasksDiv.innerHTML = "";
}

export { renderProjects, renderHead, renderToDos };
