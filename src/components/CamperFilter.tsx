import { useEffect, useRef, useState } from 'react';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@components/Button';
import CupHot from '@components/ui/icons/CupHot';
import Fridge from '@components/ui/icons/Fridge';
import Grid1x2 from '@components/ui/icons/Grid1x2';
import Grid2x2 from '@components/ui/icons/Grid2x2';
import Grid3x3 from '@components/ui/icons/Grid3x3';
import Map from '@components/ui/icons/Map';
import Microwave from '@components/ui/icons/Microwave';
import Radio from '@components/ui/icons/Radio';
import Shower from '@components/ui/icons/Shower';
import Stove from '@components/ui/icons/Stove';
import Tv from '@components/ui/icons/Tv';
import Water from '@components/ui/icons/Water';
import Wind from '@components/ui/icons/Wind';
import { cn } from '@lib/utils';
import { selectCampers } from '@redux/campers/selectors';
import { resetFilter, setFilter } from '@redux/filter/slice';

import type {
  AppDispatch,
  IconProps,
  engineFilter,
  equipmentFilter,
  formFilter,
  transmissionFilter,
} from '@/types';

const vehicleTypes = [
  {
    label: 'Van',
    value: 'panelTruck',
    icon: Grid1x2,
  },
  {
    label: 'Fully Integrated',
    value: 'fullyIntegrated',
    icon: Grid2x2,
  },
  {
    label: 'Alcove',
    value: 'alcove',
    icon: Grid3x3,
  },
] as {
  label: string;
  value: Exclude<formFilter, ''>;
  icon: React.FC<IconProps>;
}[];

const engineTypes = [
  {
    label: 'Petrol',
    value: 'petrol',
  },
  {
    label: 'Diesel',
    value: 'diesel',
  },
  {
    label: 'Hybrid',
    value: 'hybrid',
  },
] as {
  label: string;
  value: Exclude<engineFilter, ''>;
}[];

const transmissionTypes = [
  {
    label: 'Manual',
    value: 'manual',
  },
  {
    label: 'Automatic',
    value: 'automatic',
  },
] as {
  label: string;
  value: Exclude<transmissionFilter, ''>;
}[];

const equipmentTypes = [
  {
    key: 'AC',
    text: 'AC',
    icon: Wind,
  },
  {
    key: 'kitchen',
    text: 'Kitchen',
    icon: CupHot,
  },
  {
    key: 'bathroom',
    text: 'Bathroom',
    icon: Shower,
  },
  {
    key: 'TV',
    text: 'TV',
    icon: Tv,
  },
  {
    key: 'radio',
    text: 'Radio',
    icon: Radio,
  },
  {
    key: 'water',
    text: 'Water',
    icon: Water,
  },
  {
    key: 'gas',
    text: 'Gas',
    icon: Stove,
  },
  {
    key: 'refrigerator',
    text: 'Refrigerator',
    icon: Fridge,
  },
  {
    key: 'microwave',
    text: 'Microwave',
    icon: Microwave,
  },
] as {
  key: string;
  text: string;
  icon: React.FC<IconProps>;
}[];

const CamperFilter = () => {
  const dispatch: AppDispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const locations = campers
    .map((c) => c.location)
    .filter((value, index, self) => self.indexOf(value) === index);
  const [location, setLocation] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<formFilter>('');
  const [engineType, setEngineType] = useState<engineFilter>('');
  const [transmissionType, setTransmissionType] = useState<transmissionFilter>('');
  const [equipment, setEquipment] = useState<equipmentFilter>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    dispatch(
      setFilter({
        location,
        form: vehicleType,
        engine: engineType,
        transmission: transmissionType,
        equipment: { ...equipment },
      }),
    );
  };

  const handleReset = () => {
    setLocation('');
    setVehicleType('');
    setEngineType('');
    setTransmissionType('');
    setEquipment({});
    dispatch(resetFilter());
  };

  return (
    <div>
      <div className="flex flex-col gap-2 text-gray">
        Location
        <div
          className="relative flex items-center gap-2 py-[18px] px-5 text-main bg-inputs rounded-[12px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Map className="size-5" />
          {location ? location : 'Select location'}
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute overflow-hidden z-10 mt-2 top-full left-0 w-full bg-white border border-inputs rounded-lg shadow-lg"
            >
              <ul className="max-h-60 overflow-y-auto">
                {locations.map((loc) => (
                  <li
                    key={loc}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setLocation(loc);
                      setIsOpen(false);
                    }}
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-text font-medium">Filters</p>
        <div className="mt-8">
          <p className="text-main text-xl font-semibold">Vehicle equipment</p>
          <hr className="my-6 text-gray-light" />
          <div className="flex flex-wrap gap-3">
            {equipmentTypes.map((type) => (
              <button
                onClick={() => setEquipment({
                  ...equipment,
                  [type.key]: !equipment[type.key],
                })}
                className={cn(
                  'rounded-[10px] w-[112px] h-[112px] flex flex-col justify-center items-center text-center gap-2 border border-gray-light',
                  {
                    'border-button': equipment[type.key],
                  },
                )}
                key={type.key}
              >
                <type.icon className="size-8" />
                <span className="text-main font-medium">{type.text}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <p className="text-main text-xl font-semibold">Transmission type</p>
          <hr className="my-6 text-gray-light" />
          <div className="flex gap-3">
            {transmissionTypes.map((type) => (
              <button
                onClick={() => setTransmissionType(type.value)}
                className={cn(
                  'rounded-[10px] w-[112px] h-[112px] flex flex-col justify-center items-center text-center gap-2 border border-gray-light',
                  {
                    'border-button': transmissionType === type.value,
                  },
                )}
                key={type.value}
              >
                <span className="text-main font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <p className="text-main text-xl font-semibold">Engine type</p>
          <hr className="my-6 text-gray-light" />
          <div className="flex gap-3">
            {engineTypes.map((type) => (
              <button
                onClick={() => setEngineType(type.value)}
                className={cn(
                  'rounded-[10px] w-[112px] h-[112px] flex flex-col justify-center items-center text-center gap-2 border border-gray-light',
                  {
                    'border-button': engineType === type.value,
                  },
                )}
                key={type.value}
              >
                <span className="text-main font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <p className="text-main text-xl font-semibold">Vehicle type</p>
          <hr className="my-6 text-gray-light" />
          <div className="flex gap-3">
            {vehicleTypes.map((type) => (
              <button
                onClick={() => setVehicleType(type.value)}
                className={cn(
                  'rounded-[10px] w-[112px] h-[112px] flex flex-col justify-center items-center text-center gap-2 border border-gray-light',
                  {
                    'border-button': vehicleType === type.value,
                  },
                )}
                key={type.value}
              >
                <type.icon className="size-8" />
                <span className="text-main font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex gap-2 items-center">
        <Button onClick={handleSearch}>Search</Button>
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default CamperFilter;
