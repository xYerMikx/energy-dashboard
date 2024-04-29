import humidity from "@/images/humidity.svg";
import energy from "@/images/energy.svg";
import { Level } from "@/types/level";

export const levels: Level[] = [
  { src: humidity, type: "Humidity", alt: "humidity" },
  { src: energy, type: "Energy", alt: "energy" },
];
