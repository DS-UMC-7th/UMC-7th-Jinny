import { MOVIES } from "../../public/mocks/movies";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";
import { axiosInstance } from "../apis/axios-instance";
import useCustomFetch from "../hooks/useCustomFetch";

const MoviesPage = ({ url }) => {
  // console.log(MOVIES.results); // 배열
  // console.log(MOVIES); // 객체
  const { data: movies, isLoading, isError } = useCustomFetch(url);

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
