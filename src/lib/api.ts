import axios from 'axios';

import type { Filter } from '@/types';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchCampers = async (filter: Filter = {} as Filter) => {
  try {
    const params = new URLSearchParams();
    if (filter.location) {
      params.append('location', filter.location);
    }
    const response = await axios.get(`/?${params.toString()}`);
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
