import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;

  input {
    background-color: white;
    flex: 1;
    padding: 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 1px solid rbg(220, 220, 220);
    outline: none;
  }

  button {
    width: 80px;
    background-color: #ff0558;
    color: white;
    cursor: pointer;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export { SearchContainer };
