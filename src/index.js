import "/To-Do-List/src/style.css";
import "/To-Do-List/src/staticListeners";
import { newProject, newToDo } from "/To-Do-List/src/logic";
import {
  renderHead,
  renderProjects,
  renderToDos,
} from "/To-Do-List/src/render";

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
