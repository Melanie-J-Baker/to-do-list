import {
  newProjectNameModal,
  newProjectModal,
  newTask,
  editTask,
  errorMessage,
} from "./DOM.js";

newProjectModal.addProjectBtn.addEventListener("click", newProjectModal.show);
newProjectModal.cancelProjectBtn.addEventListener(
  "click",
  newProjectModal.hide
);
newProjectModal.createProjectBtn.addEventListener(
  "click",
  newProjectModal.addProject
);

newProjectNameModal.editProjectIcon.addEventListener(
  "click",
  newProjectNameModal.show
);
newProjectNameModal.confirmNewName.addEventListener(
  "click",
  newProjectNameModal.submit
);
newProjectNameModal.cancelNewName.addEventListener(
  "click",
  newProjectNameModal.hide
);

newTask.addTaskBtn.addEventListener("click", newTask.show);
newTask.cancelTaskBtn.addEventListener("click", newTask.hide);
newTask.createTaskBtn.addEventListener("click", newTask.submit);

editTask.editTaskBtn.addEventListener("click", editTask.submit);
editTask.cancelEditTaskBtn.addEventListener("click", editTask.hide);

errorMessage.okBtn.addEventListener("click", errorMessage.hide);
