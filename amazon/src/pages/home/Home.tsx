import { MainCarousel, BottomLoginRecommend, MainCard, HorizontalScroll, Header } from '@components';
import { images } from '@constants';

import { homeStyle, sectionStyle, scrollStyle, cardStyle, loginRecommendStyle, headerStyle } from './Home.style';
import mainCardImage2 from '../../assets/images/img_main_card10.svg';
import mainCardImage3 from '../../assets/images/img_main_card11.svg';
import mainCardImage4 from '../../assets/images/img_main_card12.svg';
import mainCardImage1 from '../../assets/images/img_main_card9.svg';
import mainCardBigImage from '../../assets/images/img_main_cardProduct_big5.svg';

const mainCardImages1: string[] = [mainCardBigImage];
const mainCardImages2: { img: string; text: string }[] = [
  { img: mainCardImage1, text: '욕실 용품' },
  { img: mainCardImage2, text: '침구류' },
  { img: mainCardImage3, text: '정리 선반' },
  { img: mainCardImage4, text: '실내 인테리어' },
];

const Home = () => {
  return (
    <>
      <div css={homeStyle}>
        <div css={headerStyle}>
          <Header />
          <MainCarousel />
        </div>

        <div css={sectionStyle}>
          <div css={cardStyle}>
            <MainCard mainCardImages={mainCardImages1} />
            <MainCard mainCardImages={mainCardImages2} />
          </div>
          <div css={scrollStyle}>
            <HorizontalScroll title={'가전 제품 및 주방의 베스트셀러'} images={images} />
          </div>
          <div css={loginRecommendStyle}>
            <BottomLoginRecommend />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
