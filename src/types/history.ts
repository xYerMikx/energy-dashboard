import { Device } from "./device";
import { Member } from "./member";
import { Status } from "./status";

export type HistoryItem = {
  deviceName: Device["name"];
  initializer: Member["name"];
  time: string; // hh:mm
  status: Status;
};
