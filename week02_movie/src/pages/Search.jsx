import { useState } from "react";
import * as S from "./search.style.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import MoviesPage from "../components/MoviesPage";
import styled from "styled-components";
import Card from "../components/Card";
import SearchMovieList from "./Movie/search-movie-list.jsx";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const [searchParams, setSearchParams] = useSearchParams({
    mq: "",
  });

  const mq = searchParams.get("mq");

  const handleSearchMovie = () => {
    if (mq === searchValue) return;
    navigate(`/search?mq=${searchValue}`);
  };

  const handleSearchMovieWithKeyboard = (e) => {
    if (e.key === "Enter") {
      handleSearchMovie();
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <S.SearchContainer>
        <input placeholder="영화 제목을 입력해주세요" value={searchValue} onChange={onChange} onKeyDown={handleSearchMovieWithKeyboard}></input>
        <button onClick={handleSearchMovie}>검색</button>
      </S.SearchContainer>
      <SearchMovieList />
    </div>
  );
};

export default Search;
