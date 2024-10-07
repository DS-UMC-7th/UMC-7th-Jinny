import { useEffect, useState } from "react";
import { MOVIES } from "../public/mocks/movies";
import "./App.css";

function App() {
  console.log(MOVIES.results); // 배열
  console.log(MOVIES); // 객체

  const [hoverId, setHoverId] = useState(null);

  const onMouseOver = (id) => {
    console.log("마우스가 올라왔습니다.", id);
    setHoverId(id);
  };

  const onMouseOut = () => {
    setHoverId(null);
  };

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(10,1fr)", rowGap: "15px" }}>
        {MOVIES.results.map((item) => {
          const isHovered = hoverId === item.id;
          {
            //console.log(item.title);
            return (
              <div key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  className="movie-poster"
                  style={{ width: "8.5vw", borderRadius: "10px", filter: isHovered ? "brightness(30%)" : "none", transition: "filter 0.2s ease" }}
                  onMouseOver={() => onMouseOver(item.id)}
                  onMouseOut={onMouseOut}
                ></img>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default App;
