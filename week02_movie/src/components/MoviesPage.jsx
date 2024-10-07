import { MOVIES } from "../../public/mocks/movies";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const MoviesPage = () => {
  // console.log(MOVIES.results); // 배열
  // console.log(MOVIES); // 객체

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmU3NTc1NDIxOTg5YjIwZjNiY2EyY2ZiNjE3ZDU1YiIsIm5iZiI6MTcyODMwNDAzNC42NTk4NzcsInN1YiI6IjY3MDNjNjJhNTA4ZGZhN2JhMzc5NTFmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RMzwahqZM295Jmuw4XzPOMLmYsJB2MHDCS75HsIDw8E`,
        },
      });
      setMovies(movies);
    };
    getMovies();
  }, []);

  console.log(movies);

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(10,1fr)", rowGap: "15px" }}>
        {movies.data?.results.map((item) => {
          {
            return <Card key={item.id} id={item.id} poster_path={item.poster_path} />;
          }
        })}
      </div>
    </>
  );
};

export default MoviesPage;
