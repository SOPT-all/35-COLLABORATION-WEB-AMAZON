import { AxiosError } from 'axios';

import instance from '@apis/axios';

export async function postCart(memberId: number, productId: number) {
  try {
    const response = await instance.post(
      `/api/v1/cart/${productId}`,
      {},
      {
        headers: { 'Member-Id': memberId },
      }
    );
    return { success: true, cartCount: response.data.cartCount };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const { response } = error;
      if (response) {
        return {
          success: false,
          status: response.status,
          message: response.data?.message || '알 수 없는 오류가 발생했습니다.',
        };
      }
    }

    // AxiosError가 아닌 다른 에러 처리
    return {
      success: false,
      status: 500,
      message: '알 수 없는 오류가 발생했습니다.',
    };
  }
}
