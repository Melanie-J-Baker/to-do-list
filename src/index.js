import "./style.css";
import "./staticListeners.js";
import { newProject, newToDo } from "./logic.js";
import { renderHead, renderProjects, renderToDos } from "./render.js";

let projectLibrary = [];

if (localStorage.getItem("user") == null) {
  newProject("Example Project", "Example Project");
  newToDo("Example task", "Example description", "09/03/23", "high");
  renderToDos();
} else {
  projectLibrary = JSON.parse(window.localStorage.getItem("user"));
  renderProjects();
  renderHead();
  renderToDos();
}

export { projectLibrary };
