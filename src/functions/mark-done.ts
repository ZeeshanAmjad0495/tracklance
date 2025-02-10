import update from "./update.js";
import Status from "../constants/status.js";

function markDone(file, id) {
  update(file, id, undefined, Status.Done);
}

export default markDone;
