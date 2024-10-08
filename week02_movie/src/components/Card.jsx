import { useEffect, useState } from "react";
import styled from "styled-components";

const Card = ({ id, poster_path }) => {
  const [hoverId, setHoverId] = useState(null);

  const onMouseOver = (id) => {
    setHoverId(id);
  };

  const onMouseOut = () => {
    setHoverId(null);
  };

  const isHovered = hoverId === id;

  return (
    <div key={id}>
      <PosterImg
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        className="movie-poster"
        onMouseOver={() => onMouseOver(id)}
        onMouseOut={onMouseOut}
      ></PosterImg>
    </div>
  );
};

export default Card;

const PosterImg = styled.img`
  width: 8vw;
  border-radius: 10px;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.3);
  }
`;
