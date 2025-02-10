import update from "./update.js";
import Status from "../constants/status.js";

function markInProgress(file, id) {
  update(file, id, undefined, Status.InProgress);
}

export default markInProgress;
