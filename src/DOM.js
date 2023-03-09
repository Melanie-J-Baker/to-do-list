import { newProject, currentProject, newToDo, storeProjects } from "./logic";
import { renderProjects, renderHead, renderToDos } from "./render";

const newProjectModal = (() => {
  const addProjectBtn = document.querySelector(".add-project");
  const _addProjectModal = document.querySelector(".new-project");
  const createProjectBtn = document.querySelector(".create-project");
  const cancelProjectBtn = document.querySelector(".cancel-project");
  const _projNameInput = document.querySelector("#project-name");

  function show() {
    _addProjectModal.style.display = "grid";
  }

  function hide() {
    _addProjectModal.style.display = "none";
  }

  function addProject() {
    if (_projNameInput.value != "") {
      newProject(_projNameInput.value);
      hide();
      storeProjects();
    } else {
      errorMessage.show();
    }
  }
  return {
    show,
    hide,
    addProject,
    addProjectBtn,
    createProjectBtn,
    cancelProjectBtn,
  };
})();

const newProjectNameModal = (() => {
  const _projectName = document.querySelector(".projects-heading");
  const _changeNameModal = document.querySelector(".change-project");
  const _newNameInput = document.querySelector("#new-project-name");
  const editProjectIcon = document.querySelector(".edit-project");
  const confirmNewName = document.querySelector(".change-project-btn");
  const cancelNewName = document.querySelector(".change-cancel-project");

  function show() {
    _projectName.style.display = "none";
    _changeNameModal.style.display = "grid";
  }

  function hide() {
    _changeNameModal.style.display = "none";
    _projectName.style.display = "block";
  }

  function submit() {
    currentProject().name = _newNameInput.value;
    hide();
    renderProjects();
    renderHead();
    storeProjects();
  }

  return {
    show,
    hide,
    submit,
    editProjectIcon,
    confirmNewName,
    cancelNewName,
  };
})();

const editTask = (() => {
  function show(index) {
    const _editModal = document.querySelector(".edit-task");
    const _editName = document.querySelector("#new-name");
    const _editDesc = document.querySelector("#new-desc");
    const _editDate = document.querySelector("#new-date");
    const _editPriority = document.querySelector("#new-priority");

    _editModal.style.display = "flex";
    _editName.value = currentProject().toDos[index].name;
    _editDesc.value = currentProject().toDos[index].desc;
    _editDate.value = currentProject().toDos[index].date;
    _editPriority.value = currentProject().toDos[index].priority;
  }

  function hide() {
    const _editModal = document.querySelector(".edit-task");
    _editModal.style.display = "none";
  }

  function submit(index) {
    const _editName = document.querySelector("#new-name");
    const _editDesc = document.querySelector("#new-desc");
    const _editDate = document.querySelector("#new-date");
    const _editPriority = document.querySelector("#new-priority");

    if (_editName.value == "") {
      errorMessage.show();
    } else {
      currentProject().toDos[index].name = _editName.value;
      currentProject().toDos[index].desc = _editDesc.value;
      currentProject().toDos[index].date = _editDate.value;
      currentProject().toDos[index].priority = _editPriority.value;
      renderToDos();
      storeProjects();
    }
  }
  return {
    show,
    hide,
    submit,
  };
})();

const newTask = (() => {
  const newTaskModal = document.querySelector(".new-task");
  const addTaskBtn = document.querySelector(".add-task");
  const createTaskBtn = document.querySelector(".create-task");
  const cancelTaskBtn = document.querySelector(".cancel-task");
  const _newTaskNameInput = document.querySelector("#name");
  const _newDescInput = document.querySelector("#desc");
  const _newDateInput = document.querySelector("#date");
  const _newPriorityInput = document.querySelector("#priority");

  function show() {
    newTaskModal.style.display = "flex";
    addTaskBtn.style.display = "none";
  }

  function hide() {
    newTaskModal.style.display = "none";
    addTaskBtn.style.display = "block";
    _clear();
  }

  function _clear() {
    _newTaskNameInput.value = "";
    _newDescInput.value = "";
    _newDateInput.value = "";
    _newPriorityInput.value = "";
  }

  function submit() {
    if (_newTaskNameInput.value == "") {
      errorMessage.show();
    } else {
      newToDo(
        _newTaskNameInput.value,
        _newDescInput.value,
        _newDateInput.value,
        _newPriorityInput.value
      );
      hide();
      renderToDos();
      storeProjects();
    }
  }
  return {
    newTaskModal,
    addTaskBtn,
    createTaskBtn,
    cancelTaskBtn,
    show,
    hide,
    submit,
  };
})();

const errorMessage = (() => {
  const _errorPopup = document.querySelector(".error");
  const okBtn = document.querySelector(".ok");

  function show() {
    _errorPopup.style.display = "grid";
  }

  function hide() {
    _errorPopup.style.display = "none";
  }

  return {
    show,
    hide,
    okBtn,
  };
})();

export {
  newProjectModal,
  newProjectNameModal,
  editTask,
  newTask,
  errorMessage,
};
