import { client } from '@apis/client';

import { END_POINT } from '@constants';

export const deleteCart = async (productId: number) => {
  try {
    const response = await client.delete(END_POINT.DELETE_CART_PRODUCT(productId));
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
