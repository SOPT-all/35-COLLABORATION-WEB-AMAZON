import {
  BottomLoginRecommendContainer,
  BottomLoginRecommendCard,
  BottomLoginCard,
  BottomRecommendCard,
} from './BottomLoginRecommend.style';

const BottomLoginRecommend = () => {
  return (
    <div css={BottomLoginRecommendContainer}>
      <div css={BottomLoginRecommendCard}>
        <div css={BottomLoginCard}>
          <h1>개인 맞춤형 권장 사항 보기</h1>
          <button>로그인</button>
          <div css={BottomRecommendCard}>
            <p>기존 사용자가 아니십니까?</p>
            <p>여기에서 시작합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomLoginRecommend;
