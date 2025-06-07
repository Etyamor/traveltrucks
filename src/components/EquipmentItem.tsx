import * as React from 'react';

import type { IconProps } from '@/types';

interface CategoryProps {
  label: string;
  icon: React.FC<IconProps>;
}

const EquipmentItem: React.FC<CategoryProps> = ({ label, icon: Icon }) => {
  return (
    <span className="inline-flex items-center gap-2 py-3 px-[18px] text-main bg-badges rounded-[100px] font-medium leading-5">
      {Icon && <Icon className="size-5" />}
      {label}
    </span>
  );
};

export default EquipmentItem;
