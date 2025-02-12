import fs from 'fs';

import Status from '../constants/status';
import readDataFromFile from '../helpers/read-data-from-file.js';
import type Task from '../types/task';

function add(file: string, description: string): void {
  const data: Task[] = readDataFromFile(file);

  const task: Task = {
    id: Math.random().toString(32).slice(2),
    description,
    status: Status.Todo,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  fs.writeFileSync(file, JSON.stringify([...data, task], null, 2));
}

export default add;
