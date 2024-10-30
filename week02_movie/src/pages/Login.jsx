import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email("올바른 이메일 형식이 아닙니다").required("이메일을 반드시 입력해주세요"),
    password: yup.string().min(8, "비밀번호는 8~16자 사이로 입력해주세요").max(16, "비밀번호는 8~16자 사이로 입력해주세요").required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };

  return (
    <LoginDiv>
      <h3 style={{ color: "white" }}>로그인</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginInput type={"email"} {...register("email")} backgroundcolor={"white"} placeholder="이메일을 입력해주세요!"></LoginInput>
        <ErrorMsg style={{ color: "red" }}>{errors.email?.message}</ErrorMsg>

        <LoginInput type={"password"} {...register("password")} backgroundcolor={"white"} placeholder="비밀번호를 입력해주세요!"></LoginInput>
        <ErrorMsg style={{ color: "red" }}>{errors.password?.message}</ErrorMsg>

        <LoginInput type={"submit"} backgroundcolor={isValid ? "#FF0558" : "gray"} disabled={!isValid} value={"로그인"} style={{ color: "white" }}></LoginInput>
      </form>
    </LoginDiv>
  );
};

export default Login;

const LoginDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const LoginInput = styled.input`
  width: 25vw;
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundcolor};
  outline: none;
  border: none;
  text-indent: 10px;

  &:hover {
    background-color: ${(props) => (props.backgroundcolor === "#FF0558" ? "#B5043F" : "${props.backgroundcolor}")};
  }
`;

const ErrorMsg = styled.p`
  color: "#FF0558";
  margin: 10px 5px;
  font-size: 14px;
`;
