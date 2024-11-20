import { IcBottomSearch, IcBtnPage } from '@svg';

import {
  bottomRecommendContainer,
  bottomRecommendBox,
  bottomSearchedBox,
  searchIcon,
  pagenationContainer,
  pagenation,
} from './BottomRecommend.style';

const relatedSearch = [
  'kitchen',
  'home and kitchen',
  'kitchen and',
  'beauty and personal care',
  'kitchen and dining products',
  'kitchen and home',
];

const BottomRecommend = () => {
  return (
    <>
      <div css={bottomRecommendContainer}>
        <h1>관련 검색</h1>
        <div css={bottomRecommendBox}>
          {relatedSearch.map((text, index) => (
            <div key={index} css={bottomSearchedBox}>
              <section>
                <IcBottomSearch css={searchIcon} />
                <span>{text}</span>
              </section>
            </div>
          ))}
        </div>
      </div>
      <div css={pagenationContainer}>
        <IcBtnPage css={pagenation} />
      </div>
    </>
  );
};

export default BottomRecommend;
