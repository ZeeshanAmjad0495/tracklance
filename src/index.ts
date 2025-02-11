import {
  add,
  update,
  deleteTask,
  list,
  markDone,
  markInProgress,
} from "./functions/index.js";
import Status from "./constants/status.js";
import Commands from "./constants/commands.js";

const args = process.argv.slice(2);

if (!args || !args.length) {
  throw new Error("No arguments provided");
}

const command = args.includes("list") ? args.join(" ") : args[0];

const FILE = process.env.FILE ?? "tasks.json";

switch (command) {
  case Commands.Add:
    add(FILE, args[1]);
    break;
  case Commands.Update:
    update(FILE, args[1], args[2]);
    break;
  case Commands.List:
    list();
    break;
  case Commands.Delete:
    deleteTask(FILE, args[1]);
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
    markInProgress(FILE, args[1]);
    break;
  case Commands.MarkDone:
    markDone(FILE, args[1]);
    break;
  default:
    throw new Error("Command not recognized. Please try again.");
}
