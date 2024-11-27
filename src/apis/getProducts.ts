import { END_POINT } from '@constants';

import { client } from './client';

interface GetProductsParams {
  keyword?: string;
  sort?: 'POPULARITY' | 'REVIEWCOUNT' | 'SALES' | 'LOWPRICE' | 'LATESTPRODUCTS';
}

export const getProducts = async ({ keyword = '', sort = 'POPULARITY' }: GetProductsParams) => {
  try {
    const response = await client.get(END_POINT.GET_SEARCH_PRODUCT(keyword, sort));
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
