import { EQUIPMENT_CONFIG } from '@/enums';
import type { Camper } from '@/types';

export const equipmentList = (camper: Camper) =>
  EQUIPMENT_CONFIG.filter(({ key, match }) =>
    typeof match !== "undefined"
      ? camper[key] === match
      : Boolean(camper[key])
  );


export default equipmentList;
