import { createPortal } from 'react-dom';

import { IcToastCheck, IcToastX } from '@svg';

import { cardContainer, checkIcon, failSection, successSection } from './ToastCheckCard.style';

interface ToastCheckCardProps {
  status: 'success' | 'error';
}

const portalElement = document.getElementById('modal') as HTMLElement;

const ToastCheckCard = ({ status }: ToastCheckCardProps) => {
  return createPortal(
    <div css={cardContainer}>
      {status === 'success' ? (
        <section css={successSection} aria-label="Add to Cart">
          <IcToastCheck css={checkIcon} />
          <h3>장바구니에 추가됨</h3>
        </section>
      ) : (
        <section css={failSection} aria-label="Nothing Add to Cart">
          <IcToastX css={checkIcon} />
          <div>
            <h3>장바구니에 추가되지 않음</h3>
            <p>잠시 후 다시 시도해 주세요</p>
          </div>
        </section>
      )}
    </div>,
    portalElement
  );
};

export default ToastCheckCard;
