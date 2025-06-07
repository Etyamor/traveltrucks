import { store } from '@redux/store';

export type AppDispatch = typeof store.dispatch;

export type IconProps = {
  className?: string;
};

export type Camper = {
  id: number;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  gallery: GalleryItem[];
  reviews: ReviewsItem[];
  transmission: 'manual' | 'automatic';
  engine: 'petrol' | 'diesel' | 'hybrid';
  form: 'fullyIntegrated' | 'panelTruck' | 'alcove';
  AC: boolean;
  kitchen: boolean;
  bathroom: boolean;
  TV: boolean;
  radio: boolean;
  water: boolean;
  gas: boolean;
  refrigerator: boolean;
  microwave: boolean;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
};

type GalleryItem = {
  thumb: string;
  original: string;
};

export type ReviewsItem = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type CamperEquipmentKeys =
  | 'transmission'
  | 'engine'
  | 'AC'
  | 'kitchen'
  | 'bathroom'
  | 'TV'
  | 'radio'
  | 'water'
  | 'gas'
  | 'refrigerator'
  | 'microwave'
  | 'form';

export type Filter = {
  location: string;
  form: '' | 'fullyIntegrated' | 'panelTruck' | 'alcove';
};
