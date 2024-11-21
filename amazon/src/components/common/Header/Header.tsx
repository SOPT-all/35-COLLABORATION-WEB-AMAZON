import { IcHeaderLocation, IcHeaderLanguage, IcHeaderCart } from '@svg';
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
} from './Header.style';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  return (
    <header css={HeaderContainer}>
      <div css={HeaderLogo}>
        <img src={HeaderLogoImage} alt="Amazon 로고" />
      </div>

      <IcHeaderLocation css={LocationIconStyle} />

      <div css={SearchBarWrapper}>
        <SearchBar />
      </div>

      <div css={HeaderActionButtonsWrapper}>
        <IcHeaderLanguage css={LanguageIconStyle} />
        <button css={HeaderActionButton}>로그인/회원가입</button>
        <button css={HeaderActionButton}>주문내역</button>
      </div>

      <div css={CartWrapper}>
        <IcHeaderCart css={CartIconStyle} />
        <div css={CartCountWrapper}>
          <span>3</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
