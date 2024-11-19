import { MainCarousel, Breadcrumb } from '@components';

import { sectionStyle } from './Dev.style';

const Dev = () => {
  return (
    <>
      <div css={sectionStyle}>
        <MainCarousel />
        <Breadcrumb />
      </div>
    </>
  );
};

export default Dev;
