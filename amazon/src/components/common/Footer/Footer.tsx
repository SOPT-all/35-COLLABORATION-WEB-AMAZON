import { IcFooterLanguage, IcFooterLogo, IcFooterMoneyUnit, IcFooterNation } from '@svg';

import { section1Container, section2BottomContainer } from './Footer.style';

const Footer = () => {
  return (
    <>
      <section css={section1Container}>위로 돌아가기</section>
      <section>
        <div>1</div>
        <div css={section2BottomContainer}>
          <IcFooterLogo />
          <IcFooterLanguage />
          <IcFooterMoneyUnit />
          <IcFooterNation />
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Footer;
