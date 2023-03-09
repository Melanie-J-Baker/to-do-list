import { projectLibrary } from "./index";
import { newTask, newProjectNameModal } from "./DOM";
import { renderProjects, renderHead, renderToDos } from "./render";

const newProject = (name) => {
  _removeCurrent();
  projectLibrary.push({
    name,
    toDos: [],
    current: true,
  });
  newToDo("Example task", "A simple to-do app", "09/03/23", "high");
  renderProjects();
  renderHead();
  renderToDos();
};

const newToDo = (name, desc, date, priority) => {
  currentProject().toDos.push({
    name,
    desc,
    date,
    priority,
    completed: false,
  });
};

function currentProject() {
  let currentProjects = projectLibrary.filter((project) => project.current);
  return currentProjects[0];
}

function changeCurrentProject(index) {
  _removeCurrent();
  projectLibrary[index].active = true;
  renderProjects();
  renderHead();
  renderToDos();
  newProjectNameModal.hide();
  newTask.hide();
}

function removeProject(index) {
  if (projectLibrary.length > 1) {
    if (projectLibrary[index] == currentProject()) {
      if (index != 0) {
        projectLibrary[index - 1].current = true;
        projectLibrary.splice(0, 1);
      } else {
        projectLibrary[1].current = true;
        projectLibrary.splice(0, 1);
      }
    } else {
      projectLibrary.splice(index, 1);
    }
  }
  renderProjects();
  renderHead();
  renderToDos();
}

function _removeCurrent() {
  projectLibrary.forEach((project) => (project.current = false));
}

function completed(index) {
  currentProject().toDos[index].completed = true;
}

function incompleted(index) {
  currentProject().toDos[index].completed = false;
}

function deleteTask(index) {
  currentProject().toDos.splice(index, 1);
  renderToDos();
}

function storeProjects() {
  window.localStorage.setItem("user", JSON.stringify(projectLibrary));
}

export {
  newProject,
  newToDo,
  currentProject,
  changeCurrentProject,
  removeProject,
  completed,
  incompleted,
  deleteTask,
  storeProjects,
};
