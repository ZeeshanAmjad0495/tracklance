import fs from "fs";
import readDataFromFile from "../helpers/read-data-from-file.js";
import findTaskIndexById from "../helpers/find-task-by-id.js";
import Status from "../constants/status.js";
import Task from "../types/task.js";

function update(
  file: string,
  id: string,
  description?: string,
  status?: Status
) {
  const tasks: Task[] = readDataFromFile(file);
  const taskIndex = findTaskIndexById(id, file);
  if (taskIndex === -1) {
    throw new Error("Task not found. Please anter a valid id");
  }

  const task = tasks[taskIndex];
  task.description = description ?? task.description;
  task.status =
    !status || !Object.values(Status).includes(status) ? task.status : status;
  task.updatedAt = new Date().toISOString();

  fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
}

export default update;
