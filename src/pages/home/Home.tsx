import { useEffect } from 'react';

import { MainCarousel, BottomLoginRecommend, MainCard, HorizontalScroll } from '@components';
import { images } from '@constants';
import { IcGradationBanner } from '@svg';

import {
  homeStyle,
  sectionStyle,
  scrollStyle,
  cardStyle,
  loginRecommendStyle,
  headerStyle,
  iconStyle,
} from './Home.style';
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
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      localStorage.setItem('userId', '1');
    }
  }, []);
  return (
    <>
      <section css={homeStyle}>
        {/* MainCarousel */}
        <section css={headerStyle}>
          <MainCarousel />
          <section css={iconStyle}>
            <IcGradationBanner />
          </section>
        </section>

        {/* 카드 섹션 */}
        <section css={sectionStyle}>
          <section css={cardStyle}>
            <MainCard title="50$ 미만의 홈 데코" mainCardImages={mainCardImages1} />
            <MainCard title="시계 베스트" mainCardImages={mainCardImages2} />
            <MainCard title="당신의 집에 꼭 필요한 물건들" mainCardImages={mainCardImages1} />
            <MainCard title="$50 미만의 홈 신제품" mainCardImages={mainCardImages2} />
          </section>
          <section css={cardStyle}>
            <MainCard title="게이밍 악세사리" mainCardImages={mainCardImages1} />
            <MainCard title="패션 홀리데이 특가" mainCardImages={mainCardImages2} />
            <MainCard title="$20 미만의 소소한 선물" mainCardImages={mainCardImages1} />
            <MainCard title="내 게임 시작하기" mainCardImages={mainCardImages2} />
          </section>

          <section css={scrollStyle}>
            <HorizontalScroll title={'가전 제품 및 주방의 베스트셀러'} images={images} />
          </section>
          <section css={scrollStyle}>
            <HorizontalScroll title={'신규 고객 해외 구매'} images={images} />
          </section>

          <section css={cardStyle}>
            <MainCard title="대한민국으로의 무료 배송" mainCardImages={mainCardImages1} />
            <MainCard title="귀하의 쇼핑 내역에서 영감을 얻은 기프트 아이디어" mainCardImages={mainCardImages2} />
            <MainCard title="나를 위한 뷰티 제품 알아보기" mainCardImages={mainCardImages1} />
            <MainCard title="뷰티 루틴 한 단계 업그레이드" mainCardImages={mainCardImages2} />
          </section>

          <section css={scrollStyle}>
            <HorizontalScroll title={'$20 미만 가정 인테리어 용품'} images={images} />
          </section>
          <section css={scrollStyle}>
            <HorizontalScroll title={'장난감 및 게임의 베스트셀러'} images={images} />
          </section>

          <section css={loginRecommendStyle}>
            <BottomLoginRecommend />
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
