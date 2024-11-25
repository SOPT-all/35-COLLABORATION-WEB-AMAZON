import { IcFooterCheck, IcFooterLanguage, IcFooterLogo, IcFooterMoneyUnit, IcFooterNation } from '@svg';

import {
  boxesWrapper,
  checkIcon,
  divideLine,
  footerIcon,
  h4AndSpanBox,
  logoIcon,
  section1Container,
  section2BottomContainer,
  section2TopContainer,
  section3BottomContainer,
  section3TopContainer,
  topTextsSection,
} from './Footer.style';

const Footer = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <section css={section1Container} onClick={scrollToTop}>
        위로 돌아가기
      </section>
      <section>
        <div css={section2TopContainer}>
          <section css={topTextsSection}>
            <h4>당사에 대해 알아보기</h4>
            <ul>
              <li>커리어</li>
              <li>블로그</li>
              <li>Amazon 소개</li>
              <li>투자자 관계</li>
              <li>Amazon 디바이스</li>
              <li>Amazon 사이언스</li>
            </ul>
          </section>
          <section css={topTextsSection}>
            <h4>당사와 함께 돈 벌기</h4>
            <ul>
              <li>Amazon에서 판매</li>
              <li>Amazon Business에서 판매</li>
              <li>Amazon에서 앱 판매</li>
              <li>계열사 되기</li>
              <li>제품광고</li>
              <li>Amazon에 자체 게시</li>
              <li>Amazon 허브 호스팅</li>
              <li>&gt;이외에 자세히 보기</li>
            </ul>
          </section>
          <section css={topTextsSection}>
            <h4>Amazon 결제 제품</h4>
            <ul>
              <li>포인트로 구입</li>
              <li>잔고 다시 로드</li>
              <li>Amazon 환율 변환기</li>
            </ul>
          </section>
          <section css={topTextsSection}>
            <h4>지원</h4>
            <ul>
              <li>COVID-19 및 Amazon</li>
              <li>사용자 계정</li>
              <li>내 주문</li>
              <li>배송 요금 및 정책</li>
              <li>반품 및 교환</li>
              <li>콘텐츠 및 디바이스 관리</li>
              <li>도움말</li>
            </ul>
          </section>
        </div>
        <div css={divideLine} />
        <div css={section2BottomContainer}>
          <IcFooterLogo css={logoIcon} />
          <IcFooterLanguage css={footerIcon} />
          <IcFooterMoneyUnit css={footerIcon} />
          <IcFooterNation css={footerIcon} />
        </div>
      </section>
      <section>
        <div css={section3TopContainer}>
          <div css={boxesWrapper}>
            <div css={h4AndSpanBox}>
              <h4>Amazon Music</h4>
              <span>수백만곡 스트림</span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>AmazonGlobal</h4>
              <span>국제 주문 상품 배송</span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>IMDbPro</h4>
              <span>
                전문가에게 필요한
                <br /> 정보 엔터테인먼트 <br />
                가져오기
              </span>
            </div>
          </div>
          <div css={boxesWrapper}>
            <div css={h4AndSpanBox}>
              <h4>Amazon Advertising</h4>
              <span>
                찾기, 유치 및 참여 <br />
                고객
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>홈 서비스</h4>
              <span>
                경험 많은 전문가
                <br /> 행복 보장
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>Kindle 직접 출판</h4>
              <span>
                인디 디지털 출판 <br />
                간편한 사용
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>Eero WiFi</h4>
              <span>
                모든 방에서 4K 동영상 스<br />
                트리밍
              </span>
            </div>
          </div>
          <div css={boxesWrapper}>
            <div css={h4AndSpanBox}>
              <h4>6pm</h4>
              <span>
                스코어 딜<br />
                패션 브랜드
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>
                Amazon Web
                <br /> Services
              </h4>
              <span>
                확장 가능한 클라우드
                <br />
                컴퓨팅 서비스
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>
                Prime Video
                <br /> Direct
              </h4>
              <span>
                비디오 배포
                <br />
                간편한 사용
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>Blink</h4>
              <span>
                스마트 보안
                <br />
                모든 가정용
              </span>
            </div>
          </div>
          <div css={boxesWrapper}>
            <div css={h4AndSpanBox}>
              <h4>AbeBooks</h4>
              <span>
                도서, 미술
                <br />및 수집품
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>Audible</h4>
              <span>
                다운로드
                <br />
                오디오북
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>Shopbop</h4>
              <span>
                디자이너
                <br />
                패션 브랜드
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>
                Neighbors
                <br /> App
              </h4>
              <span>
                실시간 범죄
                <br />및 안전 경고
              </span>
            </div>
          </div>
          <div css={boxesWrapper}>
            <div css={h4AndSpanBox}>
              <h4>ACX</h4>
              <span>
                오디오북 게시
                <br />
                간편한 사용
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>Box Office Mojo</h4>
              <span>
                영화 찾기
                <br />
                Box Office 데이터
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>Woot!</h4>
              <span>
                딜 및
                <br />
                장난
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>
                Subscribe with
                <br />
                Amazon
              </h4>
              <span>
                보기시도
                <br />
                구독 서비스
              </span>
            </div>
          </div>
          <div css={boxesWrapper}>
            <div css={h4AndSpanBox}>
              <h4>
                Amazon에서 판
                <br />매
              </h4>
              <span>판매 계정 시작</span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>Goodreads</h4>
              <span>
                서적 리뷰
                <br />& 추천
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>Zappos</h4>
              <span>
                신발 &<br />
                의류
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>PillPack</h4>
              <span>약국 간소화</span>
            </div>
          </div>
          <div css={boxesWrapper}>
            <div css={h4AndSpanBox}>
              <h4>
                Amazon
                <br />
                Business
              </h4>
              <span>
                모든 것<br />
                귀사 비즈니스
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>IMDb</h4>
              <span>
                영화, TV
                <br />& 유명인
              </span>
            </div>
            <div css={h4AndSpanBox}>
              <h4>Ring</h4>
              <span>
                스마트홈
                <br /> 보안 시스템
              </span>
            </div>
          </div>
        </div>
        <div css={section3BottomContainer}>
          <div>
            <span>이용 약관</span>
            <span>개인정보 취급 고지</span>
            <span>소비자 건강 데이터 개인정보 공개</span>
            <span>광고 개인정보보호 선택 항목</span>
            <IcFooterCheck css={checkIcon} />
          </div>
          <span>© 1966-2024, Amazon.com, Inc. 또는 계열사</span>
        </div>
      </section>
    </>
  );
};

export default Footer;
