import { IcHeaderLocation, IcHeaderLanguage, IcHeaderCart, IcHambuger } from '@svg';
import { useNavigate } from 'react-router-dom';
import { HeaderLogoImage } from 'src/constants/images';

import {
  HeaderContainer,
  HeaderLogo,
  LocationIconStyle,
  LanguageIconStyle,
  CartIconStyle,
  CartWrapper,
  CartCountWrapper,
  SearchBarWrapper,
  HeaderActionButtonsWrapper,
  HeaderActionButton,
  NavigationBar,
  AllMenuButton,
  NavigationItem,
  HamburgerStyle,
} from './Header.style';
import SearchBar from '../SearchBar/SearchBar';

const navItems = ['세일', '맞춤형 추천', '기프트 카드', '고객 서비스', '판매자 페이지'];

const Header = () => {
  const cartCount = 5; // 임시 장바구니 담은 수 값
  const navigate = useNavigate();

  const handleSearch = (keyword: string) => {
    const trimmedKeyword = keyword.trim();
    if (trimmedKeyword) {
      // 검색어가 비어있지 않을 때만 이동하게
      navigate(`/search?keyword=${trimmedKeyword}`);
    }
  };

  const handleLogoClick = () => {
    // 로고 클릭 시 '/' 경로로 이동
    navigate('/');
  };

  return (
    <>
      {/* 헤더 상단 */}
      <header css={HeaderContainer}>
        <div css={HeaderLogo} onClick={handleLogoClick}>
          <img src={HeaderLogoImage} alt="로고" />
        </div>

        <IcHeaderLocation css={LocationIconStyle} />

        <div css={SearchBarWrapper}>
          <SearchBar onKeywordChange={handleSearch} />
        </div>

        <div css={HeaderActionButtonsWrapper}>
          <IcHeaderLanguage css={LanguageIconStyle} />
          <button css={HeaderActionButton}>로그인/회원가입</button>
          <button css={HeaderActionButton}>주문내역</button>
        </div>

        <div css={CartWrapper}>
          <IcHeaderCart css={CartIconStyle} />
          <div css={CartCountWrapper}>
            <span>{cartCount}</span>
          </div>
        </div>
      </header>

      {/* 네비게이션 바 */}
      <nav css={NavigationBar}>
        <button css={AllMenuButton}>
          <IcHambuger css={HamburgerStyle} />
          <span css={NavigationItem}>모두</span>
        </button>
        {navItems.map((item, index) => (
          <span key={index} css={NavigationItem}>
            {item}
          </span>
        ))}
      </nav>
    </>
  );
};

export default Header;
