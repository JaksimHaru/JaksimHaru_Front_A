import { useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Checkbox from "../components/Checkbox";
import "./LoginJoin.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleInputPw = (event) => {
    setPw(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("login");
  };
  return (
    <div class="loginjoin">
      <Logo />
      <form>
        <div>
          <input
            type="text"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={handleInputEmail}
            class="loginjoin_input"
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={handleInputPw}
            class="loginjoin_input"
          />
        </div>
        <div class="login_option">
          <Checkbox text="자동로그인" />
          <button>비밀번호 찾기</button>
        </div>

        <button
          type="submit"
          onSubmit={onSubmit}
          style={{ color: "white", backgroundColor: "black" }}
          class="loginjoin_button"
        >
          로그인
        </button>
      </form>

      <div>
        SNS 계정으로 로그인
        <br />
        <button>네이버</button>
        <button>카카오</button>
      </div>

      <hr />
      <div>매일 매일 변화하는 삶,</div>
      <div style={{ color: "#A9A9A9" }}>작심하루에서 시작해 보세요!</div>
      <button class="loginjoin_button">
        <Link
          to="/join"
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          회원가입하기
        </Link>
      </button>
    </div>
  );
}
export default Login;
