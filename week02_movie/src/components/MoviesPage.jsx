import { MOVIES } from "../../public/mocks/movies";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";
import { axiosInstance } from "../apis/axios-instance";
import useCustomFetch from "../hooks/useCustomFetch";
import { useQuery } from "@tanstack/react-query";
import { useGetMovies } from "../hooks/queries/useGetMovies";
import CardListSkeleton from "../pages/Skeleton/CardListSkeleton";

const MoviesPage = ({ category, page }) => {
  // console.log(MOVIES.results); // 배열
  // console.log(MOVIES); // 객체
  //const { data: movies, isLoading, isError } = useCustomFetch(url);

  const {
    data: movies,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => useGetMovies({ category, pageParam: page }),
    queryKey: ["movies", category],
    cacheTime: 10000,
    staleTime: 10000,
  });

  // isPending: 데이터를 불러오는 중 데이터가 로딩중일 때 isPending
  // isLoading: 데이터를 불러오는 중이거나, 재시도 중일 때 True

  if (isPending) {
    return (
      <MoviesDiv>
        <CardListSkeleton number={20} />
      </MoviesDiv>
    );
  }

  if (isError) {
    return (
      <div>
        <h1 style={{ color: "white" }}>🤔에러가 발생했습니다...</h1>
      </div>
    );
  }

  return (
    <div>
      <MoviesDiv>
        {movies?.results?.map((item) => {
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
