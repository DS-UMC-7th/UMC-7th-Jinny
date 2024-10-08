import { FaSearch } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink, NavP } from "./Nav";

const Sidebar = () => {
  return (
    <SideDiv>
      <SideMenu>
        <FaSearch style={{ color: "white" }} />
        <NavLink to="/search">
          <NavP color={"white"} style={{ marginLeft: "10px" }}>
            찾기
          </NavP>
        </NavLink>
      </SideMenu>

      <SideMenu>
        <BiSolidMoviePlay style={{ color: "white" }} />
        <NavLink to="/category">
          <NavP color={"white"} style={{ marginLeft: "10px" }}>
            영화
          </NavP>
        </NavLink>
      </SideMenu>
    </SideDiv>
  );
};

export default Sidebar;

const SideDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
