import "./style.css";

let projects = [];
const newToDo = (name, desc, date, priority) => {
  return { name, desc, date, priority };
};

let toDo = newToDo("washing", "ironing", "12/04/23", "High");

function addToProject(toDo) {
  let project = [];
  project.push(toDo);
  projects.push(project);
  console.log(projects);
}

addToProject(toDo);
