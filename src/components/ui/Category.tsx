import * as React from 'react';

import CategoryIcons from '@lib/categoryIcons.ts';

interface CategoryProps {
  name: string;
}

const Category: React.FC<CategoryProps> = ({ name }) => {
  const Icon = CategoryIcons[name];

  return (
    <span className="inline-flex items-center gap-2 py-3 px-[18px] text-main bg-badges rounded-[100px] font-medium leading-5">
      {Icon && <Icon className="size-5" />} {name.charAt(0).toUpperCase() + name.slice(1)}
    </span>
  );
};

export default Category;
