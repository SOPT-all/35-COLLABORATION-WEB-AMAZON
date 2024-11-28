import { client } from '@apis/client';

import { END_POINT } from '@constants';

export const getCartCount = async () => {
  try {
    const response = await client.get(END_POINT.GET_CART_COUNT);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
