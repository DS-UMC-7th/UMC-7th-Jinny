import CategoryMenu from "./Category-menu";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <h1 style={{ color: "white" }}>카테고리</h1>
      <CategoryDiv style={{ display: "flex" }}>
        <Link to="/movies/now-playing">
          <CategoryMenu url={"../../public/category1.jpg"} text={"현재 상영중인"} />
        </Link>

        <Link to="/movies/popular">
          <CategoryMenu url={"../../public/category2.jpg"} text={"인기있는"} />
        </Link>

        <Link to="/movies/top-rated">
          <CategoryMenu url={"../../public/category3.jpg"} text={"높은 평가를 받은"} />
        </Link>

        <Link to="/movies/up-coming">
          <CategoryMenu url={"../../public/category4.jpg"} text={"개봉 예정중인"} />
        </Link>
      </CategoryDiv>
    </div>
  );
};

const CategoryDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default Category;
