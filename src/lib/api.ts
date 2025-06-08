import axios from 'axios';

import type { Filter } from '@/types';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchCampers = async (filter: Filter = {} as Filter) => {
  try {
    const params = new URLSearchParams();
    Object.entries(filter).forEach(([key, value]) => {
      if (key === 'equipment' && typeof value === 'object' && value !== null) {
        Object.entries(value).forEach(([eqKey, eqValue]) => {
          if (eqValue) {
            params.append(eqKey, 'true');
          }
        });
      } else if (value !== '' && value !== undefined && value !== null) {
        params.append(key, String(value));
      }
    });
    const response = await axios.get('/', {
      params,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching campers:', error);
    throw error;
  }
};

export const fetchCamperById = async (id: number) => {
  try {
    const response = await axios.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching camper with id ${id}:`, error);
    throw error;
  }
};
