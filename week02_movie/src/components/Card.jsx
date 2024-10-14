import { useEffect, useState } from "react";
import styled from "styled-components";

const Card = ({ id, poster_path, title, release_date }) => {
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
      <p style={{ color: "white", fontSize: "14px", fontWeight: "bold", margin: "0" }}>{title}</p>
      <p style={{ color: "white", fontSize: "12px", margin: "0" }}>{release_date}</p>
    </div>
  );
};

export default Card;

const PosterImg = styled.img`
  width: 8vw;
  height: 12vw;
  border-radius: 10px;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.3);
  }
`;
