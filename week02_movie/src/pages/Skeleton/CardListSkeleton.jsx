import CardSkeleton from "./Card-skeleton";

const CardListSkeleton = ({ number }) => {
  return new Array(number).fill(0).map((_, idx) => <CardSkeleton />);
};

export default CardListSkeleton;
