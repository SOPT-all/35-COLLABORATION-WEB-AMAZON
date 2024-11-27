import { client } from '@apis/client';

import { END_POINT } from '@constants';

export const postCart = async (productId: number) => {
  try {
    const response = await client.post(END_POINT.POST_CART_PRODUCT(productId));

    // 성공: 장바구니 상품 수 반환
    return { success: true, cartCount: response.data.cartCount };
  } catch (error: any) {
    // 실패: 에러 메시지 반환
    const status = error.response?.status;
    const message = error.response?.data?.message || '알 수 없는 에러가 발생했습니다.';

    return { success: false, status, message };
  }
};
