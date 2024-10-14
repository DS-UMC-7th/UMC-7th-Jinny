import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Navbar>
      <div>
        <NavLink to={"/"}>
          <NavP color={"#FF0558"} style={{ fontSize: "20px", fontWeight: "bold" }}>
            YONGCHA
          </NavP>
        </NavLink>
      </div>

      <div>
        <NavLink to="/login">
          <NavButton backgroundcolor={"black"}>로그인</NavButton>
        </NavLink>

        <NavLink to="/signup">
          <NavButton backgroundcolor={"#FF0558"}>회원가입</NavButton>
        </NavLink>
      </div>
    </Navbar>
  );
};

export default Nav;

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const NavButton = styled.button`
  background-color: ${(props) => props.backgroundcolor};
  border: none;
  border-radius: 10px;
  padding: 8px;
  margin-right: 10px;
  color: ${(props) => props.color || "white"};

  &:hover {
    color: ${(props) => (props.backgroundcolor === "black" ? "#FF0558" : "black")};
  }
`;

export const NavP = styled.p`
  margin: 0;
  color: ${(props) => props.color || "white"};

  &:hover {
    color: ${(props) => (props.color === "white" ? "#FF0558" : "white")};
  }
`;

const NavDiv = styled.div`
  flex: 1;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;
