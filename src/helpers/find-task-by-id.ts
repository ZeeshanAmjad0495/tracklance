import type Task from '../types/task.js';
import readDataFromFile from './read-data-from-file.js';

function findTaskIndexById(id: string, file: string): number {
  const tasks = readDataFromFile(file);
  const task = tasks.find((task) => task.id === id);

  return tasks.indexOf(task ?? ({} as Task));
}

export default findTaskIndexById;
