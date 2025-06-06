import * as React from 'react';

import Diagram from '@components/ui/icons/Diagram';
import Wind from '@components/ui/icons/Wind';

import type { IconProps } from '@/types.ts';

const categoryIcons: Record<string, React.FC<IconProps>> = {
  automatic: Diagram,
  AC: Wind,
};

export default categoryIcons;
