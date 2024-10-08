import styled from "styled-components";

const CustomButtom = () => {
  return <FirstStyledSweetPotato>커스텀 고구마 버튼🍠</FirstStyledSweetPotato>;
};

export default CustomButtom;

const FirstStyledSweetPotato = styled.button`
  display: block;
  margin-bottom: 10px;
  background-color: purple;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: orange;
  }
`;
