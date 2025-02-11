import fs from "fs";
import Task from "../types/task";

function readDataFromFile(file: string): Task[] {
  try {
    const tasks = JSON.parse(fs.readFileSync(file, "utf8"));
    return tasks;
  } catch (error) {
    throw new Error(`File not found: ${error}`);
  }
}

export default readDataFromFile;
