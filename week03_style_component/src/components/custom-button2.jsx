import styled from "styled-components";

const CustomButtom2 = () => {
  return (
    <>
      <FirstStyledSweetPotato color={"purple"}>커스텀 고구마 버튼🍠</FirstStyledSweetPotato>
      <FirstStyledSweetPotato color={"orange"}>커스텀 고구마 버튼🍠</FirstStyledSweetPotato>
      <FirstStyledSweetPotato>커스텀 고구마 버튼🍠</FirstStyledSweetPotato>
    </>
  );
};

export default CustomButtom2;

const FirstStyledSweetPotato = styled.button`
  margin: 10px 10px 10px 0;
  background-color: ${(props) => props.color || "green"};
  border: none;
  padding: 10px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;
