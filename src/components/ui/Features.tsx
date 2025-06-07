import EquipmentItem from '@components/ui/EquipmentItem';
import equipmentList from '@lib/equipmentList';

import type { Camper } from '@/types';

const Features = ({ camper }: { camper: Camper }) => {
  return (
    <div className="rounded-[10px] bg-inputs py-11 px-12">
      <ul className="flex flex-wrap gap-2">
        {equipmentList(camper).map(({ icon, text }, index) => (
          <li key={index}>
            <EquipmentItem label={text} icon={icon} />
          </li>
        ))}
      </ul>
      <div className="mt-[100px]">
        <p className="text-xl text-main font-semibold">Vehicle details</p>
        <hr className="my-8 text-gray-light" />
        <ul className="flex flex-col gap-4">
          <li className="flex justify-between">
            <span className="text-text">Form</span>
            <span className="text-text">{camper.form}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-text">Length</span>
            <span className="text-text">{camper.length}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-text">Width</span>
            <span className="text-text">{camper.width}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-text">Height</span>
            <span className="text-text">{camper.height}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-text">Tank</span>
            <span className="text-text">{camper.tank}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-text">Consumption</span>
            <span className="text-text">{camper.consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
