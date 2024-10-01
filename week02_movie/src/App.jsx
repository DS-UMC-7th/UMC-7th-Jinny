import { useEffect, useState } from "react";
import { MOVIES } from "../public/mocks/movies";
import "./App.css";

function App() {
  console.log(MOVIES.results); // 배열
  console.log(MOVIES); // 객체

  return (
    <>
      <div>
        {MOVIES.results.map((item) => {
          {
            console.log(item.title);
            return (
              <>
                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}></img>
                <h3 key={item.id}>{item.title}</h3>
              </>
            );
          }
        })}
      </div>
    </>
  );
}

export default App;
