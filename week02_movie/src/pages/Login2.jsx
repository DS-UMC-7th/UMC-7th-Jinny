import useform from "../hooks/use-form";
import styled from "styled-components";
import { validateLogin } from "../utils/validate";

const Login2 = () => {
  const login = useform({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateLogin,
  });

  const handlePressLogin = () => {
    console.log(login.values.email, login.values.password);
  };

  return (
    <LoginDiv>
      <LoginInput
        error={login.touched.email && login.errors.email}
        type={"email"}
        {...login.getTextInputProps("email")}
        backgroundcolor={"white"}
        placeholder="이메일을 입력해주세요!"
      ></LoginInput>

      {login.touched.email && login.errors.email && <ErrorText>{login.errors.email}</ErrorText>}

      <LoginInput
        error={login.touched.password && login.errors.password}
        type={"password"}
        {...login.getTextInputProps("password")}
        backgroundcolor={"white"}
        placeholder="비밀번호를 입력해주세요!"
      ></LoginInput>

      {login.touched.password && login.errors.password && <ErrorText>{login.errors.password}</ErrorText>}

      <LoginInput type={"submit"} backgroundcolor={"#FF0558"} value={"로그인"} style={{ color: "white" }} onClick={handlePressLogin}></LoginInput>
    </LoginDiv>
  );
};

export default Login2;

const LoginDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const LoginInput = styled.input`
  margin: 5px 0;
  width: 25vw;
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundcolor};
  outline: none;
  text-indent: 10px;

  outline: ${(props) => (props.error ? "2px solid #FF0558" : "none")};

  &:focus {
    outline-color: #007bff;
  }

  &:hover {
    background-color: ${(props) => (props.backgroundcolor === "#FF0558" ? "#B5043F" : "${props.backgroundcolor}")};
  }
`;

const ErrorText = styled.p`
  color: #ff0558;
  margin: 5px;
  font-size: 12px;
`;
