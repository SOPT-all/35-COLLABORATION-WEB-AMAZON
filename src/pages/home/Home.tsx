import { useEffect } from 'react';

import { MainCarousel, BottomLoginRecommend, MainCard, HorizontalScroll } from '@components';
import { productCardImages, scrollImages1, scrollImages2, scrollImages3, scrollImages4 } from '@constants';
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

const mainCardImagesList = [
  [
    { img: productCardImages[0], text: '남성' },
    { img: productCardImages[1], text: '여성' },
    { img: productCardImages[2], text: '남아' },
    { img: productCardImages[3], text: '여아' },
  ],
  [
    { img: productCardImages[4], text: '욕실 용품' },
    { img: productCardImages[5], text: '침구류' },
    { img: productCardImages[6], text: '정리 선반' },
    { img: productCardImages[7], text: '실내 인테리어' },
  ],
  [
    { img: productCardImages[8], text: '주방 및 다이닝' },
    { img: productCardImages[9], text: '주택 개조 용품' },
    { img: productCardImages[10], text: '데코' },
    { img: productCardImages[11], text: '침구 및 욕실 용품' },
  ],
  [
    { img: productCardImages[12], text: '게임기 본체' },
    { img: productCardImages[13], text: '노트북' },
    { img: productCardImages[14], text: 'PC 본체' },
    { img: productCardImages[15], text: '게이밍 악세사리' },
  ],
  [
    { img: productCardImages[16], text: '시계' },
    { img: productCardImages[17], text: '테블릿' },
    { img: productCardImages[18], text: '헤드셋' },
    { img: productCardImages[19], text: '스마트폰' },
  ],
  [
    { img: productCardImages[20], text: '향수' },
    { img: productCardImages[21], text: '네일 용품' },
    { img: productCardImages[22], text: '메이크업' },
    { img: productCardImages[23], text: '스킨케어' },
  ],
  [
    { img: productCardImages[24], text: '거울' },
    { img: productCardImages[25], text: '메이크업' },
    { img: productCardImages[26], text: '브러시' },
    { img: productCardImages[27], text: '스폰지' },
  ],
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
            <MainCard title="시계 베스트" mainCardImages={mainCardImagesList[0]} />
            <MainCard title="당신의 집에 꼭 필요한 물건들" mainCardImages={mainCardImagesList[1]} />
            <MainCard title="$50 미만의 홈 신제품" mainCardImages={mainCardImagesList[2]} />
          </section>
          <section css={cardStyle}>
            <MainCard title="게이밍 악세사리" mainCardImages={mainCardImagesList[3]} />
            <MainCard title="패션 홀리데이 특가" mainCardImages={mainCardBigImage2} />
            <MainCard title="$20 미만의 소소한 선물" mainCardImages={mainCardBigImage3} />
            <MainCard title="내 게임 시작하기" mainCardImages={mainCardBigImage4} />
          </section>

          <section css={scrollStyle}>
            <HorizontalScroll title={'가전 제품 및 주방의 베스트셀러'} images={scrollImages1} />
          </section>
          <section css={scrollStyle}>
            <HorizontalScroll title={'신규 고객 해외 구매'} images={scrollImages2} />
          </section>

          <section css={cardStyle}>
            <MainCard title="대한민국으로의 무료 배송" mainCardImages={mainCardBigImage5} />
            <MainCard title="귀하의 쇼핑 내역에서 영감을 얻은 기프트 아이디어" mainCardImages={mainCardImagesList[4]} />
            <MainCard title="나를 위한 뷰티 제품 알아보기" mainCardImages={mainCardImagesList[5]} />
            <MainCard title="뷰티 루틴 한 단계 업그레이드" mainCardImages={mainCardImagesList[6]} />
          </section>

          <section css={scrollStyle}>
            <HorizontalScroll title={'$20 미만 가정 인테리어 용품'} images={scrollImages3} />
          </section>
          <section css={scrollStyle}>
            <HorizontalScroll title={'장난감 및 게임의 베스트셀러'} images={scrollImages4} />
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
