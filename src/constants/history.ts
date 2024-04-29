import { Devices } from "@/types/device";
import { HistoryItem } from "@/types/history";
import { Status } from "@/types/status";

export const historyItems: HistoryItem[] = [
  {
    deviceName: Devices.AIR_CONDITIONER,
    initializer: "Jaquiline",
    time: "03:20",
    status: Status.ON,
  },
  {
    deviceName: Devices.REFRIDGERATOR,
    initializer: "Feroz",
    time: "01:48",
    status: Status.ON,
  },
  {
    deviceName: Devices.AIR_CONDITIONER,
    initializer: "Jaquiline",
    time: "11:36",
    status: Status.OFF,
  },
  {
    deviceName: Devices.COFFIE_MACHINE,
    initializer: "Jaquiline",
    time: "09:15",
    status: Status.ON,
  },
];
