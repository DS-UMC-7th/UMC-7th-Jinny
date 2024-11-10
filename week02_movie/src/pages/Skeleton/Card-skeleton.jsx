import * as S from "./Card-skeleton.style.js";

const CardSkeleton = () => {
  return (
    <S.Container>
      <S.CardMain />
      <S.TextWrapper>
        <S.TitleBox />
        <S.DescBox />
      </S.TextWrapper>
    </S.Container>
  );
};

export default CardSkeleton;
