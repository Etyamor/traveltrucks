import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@components/Button';
import Map from '@components/ui/icons/Map';
import { selectCampers } from '@redux/campers/selectors';
import { resetFilter, setFilter } from '@redux/filter/slice';

import type { AppDispatch } from '@/types';

const Filter = () => {
  const dispatch: AppDispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const locations = campers
    .map((c) => c.location)
    .filter((value, index, self) => self.indexOf(value) === index);
  const [location, setLocation] = useState<string>('');
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
      }),
    );
  };

  const handleReset = () => {
    setLocation('');
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
      <div className="mt-10 flex gap-2 items-center">
        <Button onClick={handleSearch}>Search</Button>
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Filter;
