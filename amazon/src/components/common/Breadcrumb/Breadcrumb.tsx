import { IcBreadArrow } from '@svg';

import { breadcrumbContainer, breadcrumbNav, breadcrumbBtn, breadcrumbCurrentBtn } from './Breadcrumb.style';

const Breadcrumb = () => {
  return (
    <div css={breadcrumbContainer}>
      <nav css={breadcrumbNav}>
        <button css={breadcrumbBtn}>아마존 홈</button>
        <IcBreadArrow width="16" height="16" />
        <button css={breadcrumbBtn}>가정 및 주방</button>
        <IcBreadArrow width="16" height="16" />
        <button css={breadcrumbCurrentBtn}>주방용 러그</button>
      </nav>
    </div>
  );
};

export default Breadcrumb;
