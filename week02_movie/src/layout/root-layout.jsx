import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const RootLayout = () => {
  return (
    <>
      <Nav />
      <MainDiv>
        <Sidebar />
        <Outlet />
      </MainDiv>
    </>
  );
};

export default RootLayout;

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;
