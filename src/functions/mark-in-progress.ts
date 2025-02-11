import Status from "../constants/status.js";
import update from "./update.js";

function markInProgress(file: string, id: string) {
  update(file, id, undefined, Status.InProgress);
}

export default markInProgress;
