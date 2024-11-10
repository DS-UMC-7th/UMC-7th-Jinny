import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Nav = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken) {
      setIsLogin(true);

      axios
        .get("http://localhost:3000/user/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          const userEmail = response.data.email;
          setEmail(userEmail);
          setNickname(userEmail.split("@")[0]);
        })
        .catch((error) => {
          if (error.response) {
            console.log("응답 오류: " + error.response);
            if (error.response.status === 401 && refreshToken) {
              console.log("토큰 만료");

              axios
                .post(
                  "http://localhost:3000/auth/token/access",
                  {},
                  {
                    headers: {
                      Authorization: `Bearer ${refreshToken}`,
                    },
                  }
                )
                .then((refreshResponse) => {
                  const newAccessToken = refreshResponse.data.accessToken;
                  localStorage.setItem("accessToken", newAccessToken);

                  axios
                    .get("http://localhost:3000/user/me", {
                      headers: {
                        Authorization: `Bearer ${newAccessToken}`,
                      },
                    })
                    .then((response) => {
                      const userEmail = response.data.email;
                      setEmail(userEmail);
                      setNickname(userEmail.split("@")[0]);
                    })
                    .catch((error) => {
                      console.log("유저 정보 요청 실패", error);
                    });
                })
                .catch((error) => {
                  console.log("재발급 실패", error);
                });
            }
          }
        });
    } else {
      setIsLogin(false);
    }
  }, []);

  const logOut = () => {
    // 로그아웃 처리
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLogin(false);
    navigate("/"); // 로그아웃 후 로그인 페이지로 이동
  };

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
        {isLogin ? (
          // 로그인 된 경우
          <>
            <NavLink to="#">
              <NavButton backgroundcolor={"black"}>{nickname}님 반갑습니다🤗</NavButton>
            </NavLink>

            <NavLink to="#" onClick={logOut}>
              <NavButton backgroundcolor={"#FF0558"}>로그아웃</NavButton>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <NavButton backgroundcolor={"black"}>로그인</NavButton>
            </NavLink>

            <NavLink to="/signup">
              <NavButton backgroundcolor={"#FF0558"}>회원가입</NavButton>
            </NavLink>
          </>
        )}
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
