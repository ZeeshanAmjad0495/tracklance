import fs from "fs";
import Status from "../constants/status.js";
import readDataFromFile from "../helpers/read-data-from-file.js";
import findTaskIndexById from "../helpers/find-task-by-id.js";
import Task from "../types/task.js";

const ERROR_MESSAGE = "Task not found. Please anter a valid id";

function update(
  file: string,
  id: string,
  description?: string,
  status?: Status
) {
  const tasks: Task[] = readDataFromFile(file);
  const taskIndex = findTaskIndexById(id, file);
  if (taskIndex === -1) {
    throw new Error(ERROR_MESSAGE);
  }

  const task = tasks[taskIndex];

  if (!task) {
    throw new Error(ERROR_MESSAGE);
  }

  task.description = description ?? task.description;
  task.status =
    !status || !Object.values(Status).includes(status) ? task.status : status;
  task.updatedAt = new Date().toISOString();

  fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
}

export default update;
