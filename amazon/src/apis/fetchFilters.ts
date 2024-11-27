import { END_POINT } from '@constants';

import { client } from './client';

export const fetchFilters = async () => {
  try {
    const response = await client.get(END_POINT.GET_PRODUCTS_FILTERS);
    return response.data; 
  } catch (error) {
    console.error('Failed to fetch filters:', error);
    throw error; 
  }
};
