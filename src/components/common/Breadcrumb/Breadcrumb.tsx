import { IcBreadArrow } from '@svg';

import {
  breadcrumbContainer,
  breadcrumbNav,
  breadcrumbBtn,
  breadcrumbCurrentBtn,
  arrowStyle,
} from './Breadcrumb.style';

const Breadcrumb = () => {
  return (
    <div css={breadcrumbContainer}>
      <nav css={breadcrumbNav}>
        <button css={breadcrumbBtn}>아마존 홈</button>
        <IcBreadArrow css={arrowStyle} />
        <button css={breadcrumbBtn}>가정 및 주방</button>
        <IcBreadArrow css={arrowStyle} />
        <button css={breadcrumbCurrentBtn}>주방용 러그</button>
      </nav>
    </div>
  );
};

export default Breadcrumb;
