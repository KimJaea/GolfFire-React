import React, { useState, useEffect, useLocation } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { useCookies } from "react-cookie";
=======
>>>>>>> ac0cb2b0be79d226cd64bbb034465202d4c26da4
import {
    Box, Code,
  } from '@chakra-ui/react';
import axios from 'axios';


const Kakao = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [image, setImage] = useState("");
<<<<<<< HEAD
  const [cookies, setCookie] = useCookies(['refreshToken']);
=======
>>>>>>> ac0cb2b0be79d226cd64bbb034465202d4c26da4

  let params = new URL(document.URL).searchParams; // get query string
  let CODE = params.get("code");
  console.log("CODE: ", CODE); // Debug !!

      const data = {
       code: CODE
     }
      const apiUrl = "http://localhost:8080/members/code";


    // KAKAO Token 발급
    const grant_type = 'authorization_code'
        const client_id = 'cd0c9cf0cf49dae9a987aebb769ee0d6' // REST-API-TOKEN
        const REDIRECT_URI = 'http://localhost:3000/auth/kakao/login/callback'
        axios.post(
          `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${CODE}`,
          {
            headers: {
              'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          },
        ).then((response) => {
            console.log('token: ',response);
            // accessToken & refreshToken & 만료시간 모두 WAS로 전송
            const access_token = response.data.access_token;
            const expires_in = response.data.expires_in;
            const refresh_token = response.data.refresh_token; 
            const refresh_token_expires_in = response.data.refresh_token_expires_in;
            getInfo(access_token);
        })
          .catch((error) => {
            console.error('Error:', error); // Debug Code
          });
    
    // KAKAO 회원 정보 가져오기 
    const getInfo=(access_token)=>{
        const apiUrl = 'https://kapi.kakao.com/v2/user/me';
   
    
    // Axios를 사용하여 GET 요청 보내기
    axios.get(apiUrl, {headers:{
       Authorization: `Bearer ${access_token}`,
    }},
    )
        .then((response) => {
        console.log('kakao info ', response);
        console.log(response.data.kakao_account.email);
        const email = response.data.kakao_account.email;

        handleCheckEmail(email);
    })
        .catch((error) => {
         console.error('Error:', error); // Debug Code
    });

    const handleCheckEmail = (email) => {
      const data = {
        id: email
      }
      const apiUrl = "http://localhost:8080/members/checkEmail";
      console.log(email);
      axios
      .post(apiUrl, data)
      .then((response) => {
        if(response.data.data.resultMessage === "SUCCESS"){
          console.log("회원가입이 되어있지 않습니다.");
          alert("회원가입이 되어있지 않습니다.");
          navigate('/Signup');
        } else{
          console.log("유효한 이메일입니다.");
            // 카카로 로그인 하기
<<<<<<< HEAD
            handleKaKaoEmailLogin(email);
=======
          
>>>>>>> ac0cb2b0be79d226cd64bbb034465202d4c26da4
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
    };
<<<<<<< HEAD

    // 로그인
    const handleKaKaoEmailLogin = (email) =>{
      console.log(email);
      // 로그인 정보
      const data = {
        id: email,
        password: "1234",
        isKakao: true
      };
      const apiUrl = "http://localhost:8080/members/sign-in"
      axios
      .post(apiUrl, data)
      .then((response) => {
        console.log(response);
        // 사용자 정보를 작성하는 코드
        // ...
        // accessToken은 헤더로 설정
        const access_token = response.data.data.token.accessToken;
        const refresh_token = response.data.data.token.refreshToken;
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        setCookie('refreshToken', refresh_token, { path: '/' , maxAge: new Date().getDate() + 60 * 60 * 24 *14 });

        navigate('/');
      })
      .catch((error) => {
        console.error("Error: ", error);
      })
    }
=======
>>>>>>> ac0cb2b0be79d226cd64bbb034465202d4c26da4
    }
    
    useEffect(() => {
      console.log("Received props: ", props);
    });

    return (
    
        <Box>
            <Box maxW="md" mx="auto">
<<<<<<< HEAD
                <div>잠시만 기다려 주세요! 로그인 중입니다.</div>
=======
                <div>잠시만 기다려 주세요! 회원 가입 중입니다.</div>
>>>>>>> ac0cb2b0be79d226cd64bbb034465202d4c26da4
            </Box>
        </Box> 
    )

}

export default Kakao;