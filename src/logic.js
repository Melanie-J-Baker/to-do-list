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
  let currentProjects = projectLibrary.filter(
    (project) => project.current == true
  );
  return currentProjects[0];
}

function changeCurrentProject(index) {
  _removeCurrent();
  projectLibrary[index].current = true;
  renderProjects();
  renderHead();
  renderToDos();
  newProjectNameModal.hide();
  newTask.hide();
}

function _removeCurrent() {
  projectLibrary.forEach((project) => (project.current = false));
}

function removeProject(index) {
  if (projectLibrary.length > 1) {
    if (index != 0) {
      projectLibrary.splice(index, 1);
      //projectLibrary[0].current = true;
    } else {
      projectLibrary.splice(0, 1);
      //projectLibrary[index + 2].current = true;
    }
  }
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
  deleteTask,
  storeProjects,
};
