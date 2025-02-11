import Status from "../constants/status.js";
import update from "./update.js";

function markDone(file: string, id: string) {
  update(file, id, undefined, Status.Done);
}

export default markDone;
