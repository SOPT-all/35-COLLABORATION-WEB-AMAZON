import { client } from '@apis/client';

import { END_POINT } from '@constants';

export const postCartCount = async (productId: number) => {
  try {
    const response = await client.post(END_POINT.POST_CART_COUNT(productId));

    return { success: true, cartCount: response.data.cartCount };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return { success: false, cartCount: 0 };
  }
};
