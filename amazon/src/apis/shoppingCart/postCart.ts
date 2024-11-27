import { client } from '@apis/client';

import { END_POINT } from '@constants';

export const postCart = async (productId: number) => {
  try {
    const response = await client.post(END_POINT.POST_CART_PRODUCT(productId));
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
