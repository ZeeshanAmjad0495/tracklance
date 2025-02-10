import readDataFromFile from "./read-data-from-file.js";
import Task from "../types/task.js";

function findTaskIndexById(id, file) {
  const tasks = readDataFromFile(file);
  const task = tasks.find((task) => task.id === id);

  return tasks.indexOf(task ?? ({} as Task));
}

export default findTaskIndexById;
