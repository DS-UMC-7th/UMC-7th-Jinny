import { useEffect, useState } from "react";

const Card = ({ id, poster_path }) => {
  const [hoverId, setHoverId] = useState(null);

  const onMouseOver = (id) => {
    console.log("마우스가 올라왔습니다.", id);
    setHoverId(id);
  };

  const onMouseOut = () => {
    setHoverId(null);
  };

  const isHovered = hoverId === id;

  return (
    <div key={id}>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        className="movie-poster"
        style={{ width: "8.5vw", borderRadius: "10px", filter: isHovered ? "brightness(30%)" : "none", transition: "filter 0.2s ease" }}
        onMouseOver={() => onMouseOver(id)}
        onMouseOut={onMouseOut}
      ></img>
    </div>
  );
};

export default Card;
