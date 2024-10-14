import { MOVIES } from "../../public/mocks/movies";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";

const MoviesPage = ({ url }) => {
  // console.log(MOVIES.results); // 배열
  // console.log(MOVIES); // 객체

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(url, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmU3NTc1NDIxOTg5YjIwZjNiY2EyY2ZiNjE3ZDU1YiIsIm5iZiI6MTcyODMwNDAzNC42NTk4NzcsInN1YiI6IjY3MDNjNjJhNTA4ZGZhN2JhMzc5NTFmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RMzwahqZM295Jmuw4XzPOMLmYsJB2MHDCS75HsIDw8E`,
        },
      });
      setMovies(movies);
    };
    getMovies();
  }, [url]);

  console.log(movies);

  return (
    <div>
      <MoviesDiv>
        {movies.data?.results.map((item) => {
          {
            return <Card key={item.id} id={item.id} poster_path={item.poster_path} title={item.title} release_date={item.release_date} />;
          }
        })}
      </MoviesDiv>
    </div>
  );
};

export default MoviesPage;

const MoviesDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  row-gap: 15px;
  column-gap: 10px;
`;
