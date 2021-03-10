import { uid } from "uid";

export const vehicles = [
  {
    id: uid(8),
    name: "Motor Bike",
    description:
      "Ideal for light weight items: Property documents, international passport etc.",
    icon: "",
  },
  {
    id: uid(8),
    name: "Car",
    description:
      "For itemts that will fill in a car boot: Bag of clothes or shoes, a microwave oven etc.",
    icon: "",
  },
  {
    id: uid(8),
    name: "Mini Van",
    description:
      "For itemts that will fill in a car boot: Bag of clothes or shoes, a microwave oven etc.",
    icon: "",
  },
  {
    id: uid(8),
    name: "Truck",
    description:
      "Perfect for moving large items: Home or office furniture, Company equipments etc",
    icon: "",
  },
];

export interface FormSteps {
  name: string;
  label: string;
  caption: string;
}

export const formSteps: FormSteps[] = [
  {
    name: "pick-up",
    label: "Pick up location",
    caption: "1",
  },
  {
    name: "shipment-details",
    label: "Shipment details",
    caption: "2",
  },
  {
    name: "upload-item",
    label: "Upload item",
    caption: "3",
  },
];
