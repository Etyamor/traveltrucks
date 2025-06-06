import axios from 'axios';

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"

export const fetchCampers = async () => {
  try {
    const response = await axios.get('/');
    console.log('Fetched campers:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching campers:', error);
    throw error;
  }
}

export const fetchCamperById = async (id: number) => {
  try {
    const response = await axios.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching camper with id ${id}:`, error);
    throw error;
  }
}