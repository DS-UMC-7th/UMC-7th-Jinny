import { LoginDiv, LoginInput, ErrorMsg } from "./Login";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { validateLogin } from "../utils/validate";
import useform from "../hooks/use-form";

const Signup = () => {
  const login = useForm({
    initialValue: {
      email: "",
      password: "",
      passwordCheck: "",
    },
    validate: validateLogin,
  });
  const schema = yup.object().shape({
    email: yup.string().email("올바른 이메일 형식이 아닙니다").required("이메일을 반드시 입력해주세요"),
    password: yup
      .string()
      .min(8, "비밀번호는 8~16자 사이로 입력해주세요")
      .max(16, "비밀번호는 8~16자 사이로 입력해주세요")
      .required("비밀번호를 반드시 입력해주세요"),
    passwordCheck: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("비밀번호 확인을 반드시 입력해주세요"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
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
      <h3 style={{ color: "white" }}>회원가입</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginInput type={"email"} {...register("email")} backgroundcolor={"white"} placeholder="이메일을 입력해주세요!"></LoginInput>
        <ErrorMsg style={{ color: "red" }}>{errors.email?.message}</ErrorMsg>

        <LoginInput type={"password"} {...register("password")} backgroundcolor={"white"} placeholder="비밀번호를 입력해주세요!"></LoginInput>
        <ErrorMsg style={{ color: "red" }}>{errors.password?.message}</ErrorMsg>

        <LoginInput type={"password"} {...register("passwordCheck")} backgroundcolor={"white"} placeholder="비밀번호를 다시 입력해주세요!"></LoginInput>
        <ErrorMsg style={{ color: "red" }}>{errors.passwordCheck?.message}</ErrorMsg>

        <LoginInput type={"submit"} backgroundcolor={"#FF0558"} value={"제출"} style={{ color: "white" }}></LoginInput>
      </form>
    </LoginDiv>
  );
};

export default Signup;
