import Status from '../constants/status.js';
import readDataFromFile from '../helpers/read-data-from-file.js';

function list(file: string, status?: Status): void {
  const tasks = readDataFromFile(file);
  if (status === undefined) {
    console.log(tasks);
    return;
  }

  if (!Object.values(Status).includes(status)) {
    throw new Error('Please enter a valid status');
  }
  const filteredTasks = tasks.filter((task) => task.status === status);
  console.log(filteredTasks);
}

export default list;
