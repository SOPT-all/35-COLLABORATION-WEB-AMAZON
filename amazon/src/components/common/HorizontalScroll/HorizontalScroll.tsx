import { useEffect, useRef, useState } from 'react';

import { IcHorizonScrollLeftArrow, IcHorizonScrollRightArrow } from '@svg';

import { arrowButton, horizontalScrollContainer, horizontalScrollWrapper } from './HorizontalScroll.style';

interface HorizontalScrollProps {
  title: string;
  images: string[];
}

const HorizontalScroll = ({ title, images }: HorizontalScrollProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const handleScroll = (direction: 'left' | 'right') => {
    if (wrapperRef.current) {
      const itemWidth = 200 + 10;
      const scrollAmount = itemWidth * 6;

      wrapperRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const updateScrollButtons = () => {
    if (wrapperRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = wrapperRef.current;
      console.log(scrollLeft, scrollWidth, clientWidth);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      updateScrollButtons(); // 초기 버튼 상태 업데이트
      wrapper.addEventListener('scroll', updateScrollButtons);

      return () => {
        wrapper.removeEventListener('scroll', updateScrollButtons);
      };
    }
  }, []);

  return (
    <section css={horizontalScrollContainer}>
      <h1>{title}</h1>
      {canScrollLeft && <IcHorizonScrollLeftArrow onClick={() => handleScroll('left')} css={arrowButton('left')} />}
      <div ref={wrapperRef} css={horizontalScrollWrapper}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`image-${index}`} />
        ))}
      </div>
      {canScrollRight && <IcHorizonScrollRightArrow onClick={() => handleScroll('right')} css={arrowButton('right')} />}
    </section>
  );
};

export default HorizontalScroll;
