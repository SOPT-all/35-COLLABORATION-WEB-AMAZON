import { END_POINT } from '@constants';

import { client } from './client';

export const getSearchHistory = async () => {
  try {
    const response = await client.get(END_POINT.GET_SEARCH_HISTORY);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
