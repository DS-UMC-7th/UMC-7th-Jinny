import styled from "styled-components";

const CategoryMenu = ({ url, text }) => {
  return (
    <div style={{ position: "relative" }}>
      <CategoryImg src={url}></CategoryImg>
      <ImgText style={{ color: "white" }}>{text}</ImgText>
    </div>
  );
};

export default CategoryMenu;

const CategoryImg = styled.img`
  width: 20vw;
  height: 12vw;
  border-radius: 10px;
  margin-right: 10px;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.3);
  }
`;

const ImgText = styled.p`
  position: absolute;
  top: 70%;
  left: 5%;
  color: white;
  padding: 2px 10px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 50%);
`;
