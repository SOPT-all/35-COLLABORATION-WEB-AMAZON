import {
  cardGridImage,
  cardImageBox,
  cardImageGridBox,
  cardOnlyImage,
  cardTitle,
  mainCardContainer,
  moreButton,
} from './MainCard.style';

interface ImageObject {
  img: string;
  text: string;
}

interface MainCardProps {
  mainCardImages: string[] | ImageObject[];
  title: string;
}

const MainCard = ({ mainCardImages, title }: MainCardProps) => {
  const isArray = (images: string[] | ImageObject[]): images is string[] => {
    return typeof images[0] === 'string';
  };
  return (
    <article css={mainCardContainer}>
      <h1 css={cardTitle}>{title}</h1>
      <div css={cardImageBox}>
        {isArray(mainCardImages) && mainCardImages.length === 1 && (
          <img src={mainCardImages[0]} alt={`mainCardImage-${mainCardImages[0]}`} css={cardOnlyImage} />
        )}
        {mainCardImages.length === 4 && (
          <div css={cardImageGridBox}>
            {!isArray(mainCardImages) &&
              mainCardImages.map((image, index) => (
                <div key={index} css={cardGridImage}>
                  <img src={image.img} alt={`mainCardImage-${index}`} />
                  <span>{image.text}</span>
                </div>
              ))}
          </div>
        )}
      </div>
      <button css={moreButton}>더보기</button>
    </article>
  );
};

export default MainCard;
