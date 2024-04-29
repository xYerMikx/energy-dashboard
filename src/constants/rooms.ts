import { Room } from "@/types/room";
import kitchen from "@/images/kitchen.svg";
import livingRoom from "@/images/living-room.svg";
import bathroom from "@/images/bathroom.svg";
import bedroom from "@/images/bedroom.svg";

export const rooms: Room[] = [
  { icon: kitchen, alt: "kitchen", deviceAmount: 8, roomName: "Kitchen" },
  {
    icon: livingRoom,
    alt: "living room",
    deviceAmount: 12,
    roomName: "Living Room",
  },
  { icon: bedroom, alt: "bedroom", deviceAmount: 4, roomName: "Bedroom" },
  { icon: bathroom, alt: "bathroom", deviceAmount: 3, roomName: "Bathroom" },
];
