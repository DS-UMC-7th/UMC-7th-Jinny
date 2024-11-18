import { useNavigate, useSearchParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch";
import styled from "styled-components";
import Card from "../../components/Card";
import CardSkeleton from "../Skeleton/Card-skeleton";
import CardListSkeleton from "../Skeleton/CardListSkeleton";
import { useQuery } from "@tanstack/react-query";
import { useGetSeachMovies } from "../../hooks/queries/useGetMovies";

const SearchMovieList = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    mq: "",
  });
  const mq = searchParams.get("mq");
  const pageParam = 1;
  // const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;
  //const { data: movies, isLoading, isError } = useCustomFetch(url);

  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => useGetSeachMovies({ mq, pageParam }),
    queryKey: ["movies", mq, pageParam],
    cacheTime: 10000,
    staleTime: 10000,
  });

  if (isLoading) {
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

  if (mq && movies?.results.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "white" }}>{mq}에 해당하는 데이터가 없습니다 😱</h2>
      </div>
    );
  }

  return (
    <div style={{ display: "block" }}>
      <MoviesDiv>
        {movies?.results.map((item) => {
          {
            return <Card key={item.id} id={item.id} poster_path={item.poster_path} title={item.title} release_date={item.release_date} />;
          }
        })}
      </MoviesDiv>
    </div>
  );
};

export default SearchMovieList;

const MoviesDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  row-gap: 15px;
  column-gap: 10px;
  margin-top: 20px;
`;
