import "./style.css";

let projectLibrary = [];
const newToDo = (name, desc, date, priority) => {
  return { name, desc, date, priority, completed: false };
};

let toDo = newToDo("washing", "ironing", "12/04/23", "High");

function addToProject(toDo) {
  let project = [];
  project.push(toDo);
  projectLibrary.push(project);
  console.log(projectLibrary);
}

addToProject(toDo);
