import { useParams } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../apis/axios-instance";

const MovieDetail = () => {
  const { movieId } = useParams();

  const MovieDetailURL = `/movie/${movieId}?language=ko`;

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axiosInstance.get(MovieDetailURL);
        setMovie(response.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  if (isLoading) {
    return (
      <div>
        <h1 style={{ color: "white" }}>😯로딩 중 입니다...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1 style={{ color: "white" }}>🤔에러가 발생했습니다...</h1>
      </div>
    );
  }

  console.log(movie);

  return (
    <div>
      <h1 style={{ color: "white" }}>영화 상세 페이지 {movieId}</h1>
      <h1 style={{ color: "white" }}>영화 상세 페이지 {movie.title}</h1>
    </div>
  );
};

export default MovieDetail;
