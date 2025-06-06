import Diagram from '@components/ui/icons/Diagram';
import FuelPump from '@components/ui/icons/FuelPump';
import Wind from '@components/ui/icons/Wind';
import CupHot from '@components/ui/icons/CupHot';
import Shower from '@components/ui/icons/Shower';
import Tv from '@components/ui/icons/Tv';
import Radio from '@components/ui/icons/Radio';
import Water from '@components/ui/icons/Water';
import Stove from '@components/ui/icons/Stove';
import Fridge from '@components/ui/icons/Fridge';
import Microwave from '@components/ui/icons/Microwave';
import Grid1x2 from '@components/ui/icons/Grid1x2';
import Grid3x3 from '@components/ui/icons/Grid3x3';
import Grid2x2 from '@components/ui/icons/Grid2x2';
import type { CamperEquipmentKeys, IconProps } from '@/types';

export const EQUIPMENT_CONFIG: {
  key: CamperEquipmentKeys,
  match?: string;
  text: string;
  icon : React.FC<IconProps>;
}[] = [
  {
    key: "transmission",
    match: "automatic",
    text: "Automatic",
    icon: Diagram,
  },
  {
    key: "transmission",
    match: "manual",
    text: "Manual",
    icon: Diagram,
  },
  {
    key: "engine",
    match: "petrol",
    text: "Petrol",
    icon: FuelPump,
  },
  {
    key: "engine",
    match: "diesel",
    text: "Diesel",
    icon: FuelPump,
  },
  {
    key: "engine",
    match: "hybrid",
    text: "Hybrid",
    icon: FuelPump,
  },
  {
    key: "AC",
    text: "AC",
    icon: Wind,
  },
  {
    key: "kitchen",
    text: "Kitchen",
    icon: CupHot,
  },
  {
    key: "bathroom",
    text: "Bathroom",
    icon: Shower,
  },
  {
    key: "TV",
    text: "TV",
    icon: Tv,
  },
  {
    key: "radio",
    text: "Radio",
    icon: Radio,
  },
  {
    key: "water",
    text: "Water",
    icon: Water,
  },
  {
    key: "gas",
    text: "Gas",
    icon: Stove,
  },
  {
    key: "refrigerator",
    text: "Refrigerator",
    icon: Fridge,
  },
  {
    key: "microwave",
    text: "Microwave",
    icon: Microwave,
  },
  {
    key: "form",
    match: "panelTruck",
    text: "Van",
    icon: Grid1x2,
  },
  {
    key: "form",
    match: "alcove",
    text: "Alcove",
    icon: Grid3x3,
  },
  {
    key: "form",
    match: "fullyIntegrated",
    text: "Fully Integrated",
    icon: Grid2x2,
  },
];