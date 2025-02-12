import type Status from '../constants/status.js';

interface Task {
  createdAt: string;
  description: string;
  id: string;
  status: Status;
  updatedAt: string;
}

export default Task;
