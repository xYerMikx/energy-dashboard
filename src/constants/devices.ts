import { Device, Devices } from "@/types/device";
import airConditioner from "@/images/conditioner.svg";
import smartTv from "@/images/smarttv.svg";
import coffieMachine from "@/images/coffee-machine.svg";
import refridgerator from "@/images/refridgerator.svg";

export const devices: Device[] = [
  {
    alt: "air conditioner",
    icon: airConditioner,
    name: Devices.AIR_CONDITIONER,
  },
  {
    alt: "smart tv",
    icon: smartTv,
    name: Devices.SMART_TV,
  },
  {
    alt: "coffie machine",
    icon: coffieMachine,
    name: Devices.COFFIE_MACHINE,
  },
  {
    alt: "refridgerator",
    icon: refridgerator,
    name: Devices.REFRIDGERATOR,
  },
];
