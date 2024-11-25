import { IcToastCheck, IcToastX } from '@svg';

import { cardContainer, checkIcon } from './ToastCheckCard.style';

interface ToastCheckCardProps {
  status: 'success' | 'error';
}

const ToastCheckCard = ({ status }: ToastCheckCardProps) => {
  return (
    <div css={cardContainer}>
      {status === 'success' ? (
        <section aria-label="Add to Cart">
          <IcToastCheck css={checkIcon} />
          <h3>장바구니에 추가됨</h3>
        </section>
      ) : (
        <section aria-label="Nothing Add to Cart">
          <IcToastX css={checkIcon} />
          <h3>장바구니에 추가되지 않음</h3>
          <p>잠시 후 다시 시도해 주세요</p>
        </section>
      )}
    </div>
  );
};

export default ToastCheckCard;
