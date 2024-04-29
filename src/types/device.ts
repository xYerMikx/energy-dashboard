export enum Devices {
  AIR_CONDITIONER = "Air Conditioner",
  SMART_TV = "Smart TV",
  COFFIE_MACHINE = "Coffie Machine",
  REFRIDGERATOR = "Refridgerator",
}
export type Device = {
  name: Devices;
  icon: string;
  alt: string;
};
