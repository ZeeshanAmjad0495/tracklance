import Commands from "./constants/commands.js";
import Status from "./constants/status.js";
import {
  add,
  deleteTask,
  list,
  markDone,
  markInProgress,
  update,
} from "./functions/index.js";

const FILE = process.env["FILE"] ?? "tasks.json";

function performActions(args: string[], command: string) {
  switch (command) {
    case Commands.Add:
      args[1] ? add(FILE, args[1]) : console.log("Please enter a description");
      break;
    case Commands.Update:
      args[1]
        ? update(FILE, args[1], args[2])
        : console.log("Please enter an id");
      break;
    case Commands.List:
      list();
      break;
    case Commands.Delete:
      args[1] ? deleteTask(FILE, args[1]) : console.log("Please enter an id");
      break;
    case Commands.ListTodo:
      list(Status.Todo);
      break;
    case Commands.ListInProgress:
      list(Status.InProgress);
      break;
    case Commands.ListDone:
      list(Status.Done);
      break;
    case Commands.MarkInProgress:
      args[1]
        ? markInProgress(FILE, args[1])
        : console.log("Please enter an id");
      break;
    case Commands.MarkDone:
      args[1] ? markDone(FILE, args[1]) : console.log("Please enter an id");
      break;
    default:
      throw new Error("Command not recognized. Please try again.");
  }
}

export default performActions;
