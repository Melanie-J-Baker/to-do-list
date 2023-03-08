import "./style.css";
let projects = [];
const newToDo = (name, desc, date, priority) => {
  const sayHello = () => console.log("hello");
  return { name, desc, date, priority, sayHello };
};

function addToProject() {
  let project = [];
  project.push(toDo);
  projects.push(project);
  console.log(projects);
}

let toDo = newToDo("washing", "ironing", "12/04/23", "High");
addToProject(toDo);
