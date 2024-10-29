import { useParams } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../apis/axios-instance";
import styled from "styled-components";
import Credit from "../components/Credit";

const MovieDetail = () => {
  const { movieId } = useParams();

  const MovieDetailURL = `/movie/${movieId}?language=ko`;
  const MovieCreditURL = `/movie/${movieId}/credits?language=ko-KR`;

  const [movie, setMovie] = useState(null);
  const [credit, setCredit] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axiosInstance.get(MovieDetailURL);
        const responseCredit = await axiosInstance.get(MovieCreditURL);
        setMovie(response.data);
        setCredit(responseCredit.data);
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

  // console.log(movie);
  console.log(credit);
  console.log(credit.cast);

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div style={{ width: "100%", position: "relative" }}>
        <div style={{ width: "100%", height: "350px", overflow: "hidden", margin: "0 auto" }}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.2)" }}
          ></img>
        </div>
        <div style={{ position: "absolute", top: "5%", left: "3%", width: "40%", backgroundColor: "transparent", height: "330px", overflow: "hidden" }}>
          <h1 style={{ color: "white", margin: "0", marginBottom: "10px", backgroundColor: "transparent" }}>{movie.title}</h1>
          <DetailP>평균 {movie.vote_average}</DetailP>
          <DetailP>{movie.release_date}</DetailP>
          <DetailP>{movie.runtime}분</DetailP>
          <DetailP style={{ fontSize: "24px", fontStyle: "italic", marginBottom: "10px" }}>{movie.tagline}</DetailP>
          <DetailP>{movie.overview}</DetailP>
        </div>

        {/* <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="movie-poster"></img> */}
      </div>
      <MoviesDiv style={{ position: "absolute", left: "3%" }}>
        {credit?.cast.slice(0, 20).map((item) => {
          {
            return (
              <Credit creditKey={item.id} key={item.id} id={item.id} profile_path={item.profile_path} name={item.name} original_name={item.original_name} />
            );
          }
        })}
      </MoviesDiv>
    </div>
  );
};

export default MovieDetail;

const DetailP = styled.p`
  margin: 0;
  color: white;
  background-color: transparent;
`;

const MoviesDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  row-gap: 15px;
  column-gap: 10px;
`;
