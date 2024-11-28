import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { getCartCount } from '@apis/shoppingCart/getCartCount';

import { IcHeaderLocation, IcHeaderLanguage, IcHeaderCart, IcHamburger } from '@svg';
import { HeaderLogoImage } from 'src/constants/images';
import { useCart } from 'src/context/cartContext';

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
  const [cartCount, setCartCount] = useState(0);
  const { updateCartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // URL에서 keyword 추출
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword') || '';

  // 장바구니 카운트 가져오기
  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const response = await getCartCount();
        if (response?.cartCount !== undefined) {
          setCartCount(response.cartCount);
          updateCartCount(response.cartCount); // 전역 상태 업데이트
        }
      } catch (error) {
        console.error('장바구니 카운트 가져오기 에러:', error);
      }
    };

    fetchCartCount();
  }, [updateCartCount]);

  const handleSearch = (keyword: string) => {
    const trimmedKeyword = keyword.trim();
    if (trimmedKeyword) {
      navigate(`/search?keyword=${trimmedKeyword}`);
    }
  };

  const handleLogoClick = () => {
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
          <SearchBar onKeywordChange={handleSearch} initialQuery={keyword} />
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
          <IcHamburger css={HamburgerStyle} />
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
