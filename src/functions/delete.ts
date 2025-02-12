import fs from 'fs';

import findTaskIndexById from '../helpers/find-task-by-id.js';
import readDataFromFile from '../helpers/read-data-from-file.js';

function deleteTask(file: string, id: string): void {
  const tasks = readDataFromFile(file);
  const taskIndex = findTaskIndexById(id, file);

  if (taskIndex === -1) {
    throw new Error('Task not found. Please anter a valid id');
  }
  tasks.splice(taskIndex, 1);
  fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
}

export default deleteTask;
