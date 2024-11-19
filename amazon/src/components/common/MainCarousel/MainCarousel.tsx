import { useRef, useState } from 'react';

import { IcBannerLeftArrow, IcBannerRightArrow } from '@svg';

import { carouselStyle, hiddenStyle, iconStyle, imageContainer, imageStyle } from './MainCarousel.style';
import image1 from '../../../assets/images/img_banner1.svg';
import image2 from '../../../assets/images/img_banner2.svg';
import image3 from '../../../assets/images/img_banner3.svg';
import image4 from '../../../assets/images/img_banner4.svg';
import image5 from '../../../assets/images/img_banner5.svg';

const images = [image1, image2, image3, image4, image5];

const MainCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.offsetWidth;
      const newIndex =
        direction === 'left' ? Math.max(currentIndex - 1, 0) : Math.min(currentIndex + 1, images.length - 1);
      setCurrentIndex(newIndex);
      containerRef.current.scrollTo({
        left: newIndex * scrollWidth,
        behavior: 'smooth',
      });
    }
  };
  return (
    <section css={carouselStyle}>
      <IcBannerLeftArrow css={[iconStyle, currentIndex === 0 && hiddenStyle]} onClick={() => handleScroll('left')} />
      <div css={imageContainer} ref={containerRef}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`carousel-${index}`} css={imageStyle} />
        ))}
      </div>
      <IcBannerRightArrow
        css={[iconStyle, currentIndex === images.length - 1 && hiddenStyle]}
        onClick={() => handleScroll('right')}
      />
    </section>
  );
};

export default MainCarousel;
