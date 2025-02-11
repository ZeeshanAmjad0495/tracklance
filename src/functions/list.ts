import Status from "../constants/status.js";
import readDataFromFile from "../helpers/read-data-from-file.js";

function list(status?: Status) {
  const tasks = readDataFromFile("tasks.json");
  if (!status) {
    console.log(tasks);
    return;
  }

  if (!Object.values(Status).includes(status)) {
    throw new Error("Please enter a valid status");
  }
  const filteredTasks = tasks.filter((task) => task.status === status);
  console.log(filteredTasks);
}

export default list;
