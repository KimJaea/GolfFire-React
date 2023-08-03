<<<<<<< HEAD
import React, { useState } from "react";

// Redux
import { useSelector } from "react-redux";

// Signup Components
import SignupChoice from "./SignupChoice";
import SignupEmail1 from "./SignupEmail1";
import SignupEmail2 from "./SignupEmail2";
import SignupInfo from "./SignupInfo";

import golfImage from "../../assets/source/icons/golf.png";
import "./Signup.css";

function Signup() {
  // Redux
  const step = useSelector((state) => state.signupFeature.step);

  return (
    <div id="Signup">
      {/* 기능 공간 */}
      <div id="signin-func">
        {step === 1 && <SignupChoice />}
        {step === 2 && <SignupEmail1 />}
        {step === 3 && <SignupEmail2 />}
        {step === 4 && <SignupInfo />}
      </div>

      {/* 그림 공간 */}
      <div id="signin-banner">
        <div id="signin-banner-image">
          <img src={golfImage} alt="banner-golf-icon" />
        </div>
      </div>
=======
import React from "react";
import { NavLink } from "react-router-dom";

import {
  Button,
} from "@chakra-ui/react";
import "./Signup.css";

function Signup() {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/auth/kakao/signup/callback'
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  const handleKakaoSignup = () => {
    // console.log("카카오 로그인"); // Debug !!
    window.location.href = kakaoUrl;
  }

  return (
    <div id="Signup">
      <div className="title">
        <h1>
          회원가입
        </h1>
      </div>
      <div>
        <NavLink to="/signup/email1" >
          <Button
            style={{
              height: "2.5rem",
              width: "100%",

              color: "black",
              borderRadius: "30px",
              background: "#FFFFFF",
            }}
            maxW={'sm'}
            marginBottom={'2.5rem'}
          > 이메일로 가입하기</Button>
        </NavLink>
      </div>
      <div>
        <Button
          onClick={handleKakaoSignup}
          style={{
            height: "2.5rem",
            width: "100%",

            color: "black",
            borderRadius: "30px",
            background: "#FFF500",
          }}
          maxW={'sm'}
          marginBottom={'2.5rem'}
        > 카카오톡으로 가입하기</Button>
      </div>
      <hr />
      <NavLink to="/login" style={({ isActive, isPending }) => {
        return {
          fontWeight: isActive ? "bold" : "",
        };
      }}>로그인하기</NavLink>
>>>>>>> ac0cb2b0be79d226cd64bbb034465202d4c26da4
    </div>
  );
}

export default Signup;
