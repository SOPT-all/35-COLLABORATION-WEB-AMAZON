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
import mainCardImage7 from '../../assets/images/img_main_card1.svg';
import mainCardImage4 from '../../assets/images/img_main_card10.svg';
import mainCardImage1 from '../../assets/images/img_main_card11.svg';
import mainCardImage2 from '../../assets/images/img_main_card12.svg';
import mainCardImage12 from '../../assets/images/img_main_card13.svg';
import mainCardImage11 from '../../assets/images/img_main_card14.svg';
import mainCardImage10 from '../../assets/images/img_main_card15.svg';
import mainCardImage9 from '../../assets/images/img_main_card16.svg';
import mainCardImage25 from '../../assets/images/img_main_card17.svg';
import mainCardImage28 from '../../assets/images/img_main_card18.svg';
import mainCardImage27 from '../../assets/images/img_main_card19.svg';
import mainCardImage5 from '../../assets/images/img_main_card2.svg';
import mainCardImage26 from '../../assets/images/img_main_card20.svg';
import mainCardImage6 from '../../assets/images/img_main_card3.svg';
import mainCardImage17 from '../../assets/images/img_main_card33.svg';
import mainCardImage18 from '../../assets/images/img_main_card34.svg';
import mainCardImage19 from '../../assets/images/img_main_card35.svg';
import mainCardImage20 from '../../assets/images/img_main_card36.svg';
import mainCardImage8 from '../../assets/images/img_main_card4.svg';
import mainCardImage16 from '../../assets/images/img_main_card5.svg';
import mainCardImage21 from '../../assets/images/img_main_card51.svg';
import mainCardImage22 from '../../assets/images/img_main_card52.svg';
import mainCardImage23 from '../../assets/images/img_main_card53.svg';
import mainCardImage24 from '../../assets/images/img_main_card54.svg';
import mainCardImage15 from '../../assets/images/img_main_card6.svg';
import mainCardImage13 from '../../assets/images/img_main_card7.svg';
import mainCardImage14 from '../../assets/images/img_main_card8.svg';
import mainCardImage3 from '../../assets/images/img_main_card9.svg';
import mainCardBigImg5 from '../../assets/images/img_main_cardProduct_big1.svg';
import mainCardBigImg2 from '../../assets/images/img_main_cardProduct_big2.svg';
import mainCardBigImg3 from '../../assets/images/img_main_cardProduct_big3.svg';
import mainCardBigImg4 from '../../assets/images/img_main_cardProduct_big4.svg';
import mainCardBigImg1 from '../../assets/images/img_main_cardProduct_big5.svg';

const mainCardBigImage1: string[] = [mainCardBigImg1];
const mainCardBigImage2: string[] = [mainCardBigImg2];
const mainCardBigImage3: string[] = [mainCardBigImg3];
const mainCardBigImage4: string[] = [mainCardBigImg4];
const mainCardBigImage5: string[] = [mainCardBigImg5];

const mainCardImages1: { img: string; text: string }[] = [
  { img: mainCardImage1, text: '남성' },
  { img: mainCardImage2, text: '여성' },
  { img: mainCardImage3, text: '남아' },
  { img: mainCardImage4, text: '여아' },
];
const mainCardImages2: { img: string; text: string }[] = [
  { img: mainCardImage5, text: '욕실 용품' },
  { img: mainCardImage6, text: '침구류' },
  { img: mainCardImage7, text: '정리 선반' },
  { img: mainCardImage8, text: '실내 인테리어' },
];
const mainCardImages3: { img: string; text: string }[] = [
  { img: mainCardImage9, text: '주방 및 다이닝' },
  { img: mainCardImage10, text: '주택 개조 용품' },
  { img: mainCardImage11, text: '데코' },
  { img: mainCardImage12, text: '침구 및 욕실 용품' },
];
const mainCardImages4: { img: string; text: string }[] = [
  { img: mainCardImage13, text: '게임기 본체' },
  { img: mainCardImage14, text: '노트북' },
  { img: mainCardImage15, text: 'PC 본체' },
  { img: mainCardImage16, text: '게이밍 악세사리' },
];
const mainCardImages5: { img: string; text: string }[] = [
  { img: mainCardImage17, text: '시계' },
  { img: mainCardImage18, text: '테블릿' },
  { img: mainCardImage19, text: '헤드셋' },
  { img: mainCardImage20, text: '스마트폰' },
];
const mainCardImages6: { img: string; text: string }[] = [
  { img: mainCardImage21, text: '향수' },
  { img: mainCardImage22, text: '네일 용품' },
  { img: mainCardImage23, text: '메이크업' },
  { img: mainCardImage24, text: '스킨케어' },
];
const mainCardImages7: { img: string; text: string }[] = [
  { img: mainCardImage25, text: '거울' },
  { img: mainCardImage26, text: '메이크업' },
  { img: mainCardImage27, text: '브러시' },
  { img: mainCardImage28, text: '스폰지' },
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
            <MainCard title="50$ 미만의 홈 데코" mainCardImages={mainCardBigImage1} />
            <MainCard title="시계 베스트" mainCardImages={mainCardImages1} />
            <MainCard title="당신의 집에 꼭 필요한 물건들" mainCardImages={mainCardImages2} />
            <MainCard title="$50 미만의 홈 신제품" mainCardImages={mainCardImages3} />
          </section>
          <section css={cardStyle}>
            <MainCard title="게이밍 악세사리" mainCardImages={mainCardImages4} />
            <MainCard title="패션 홀리데이 특가" mainCardImages={mainCardBigImage2} />
            <MainCard title="$20 미만의 소소한 선물" mainCardImages={mainCardBigImage3} />
            <MainCard title="내 게임 시작하기" mainCardImages={mainCardBigImage4} />
          </section>

          <section css={scrollStyle}>
            <HorizontalScroll title={'가전 제품 및 주방의 베스트셀러'} images={images} />
          </section>
          <section css={scrollStyle}>
            <HorizontalScroll title={'신규 고객 해외 구매'} images={images} />
          </section>

          <section css={cardStyle}>
            <MainCard title="대한민국으로의 무료 배송" mainCardImages={mainCardBigImage5} />
            <MainCard title="귀하의 쇼핑 내역에서 영감을 얻은 기프트 아이디어" mainCardImages={mainCardImages5} />
            <MainCard title="나를 위한 뷰티 제품 알아보기" mainCardImages={mainCardImages6} />
            <MainCard title="뷰티 루틴 한 단계 업그레이드" mainCardImages={mainCardImages7} />
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
