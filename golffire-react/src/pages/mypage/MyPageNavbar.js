<<<<<<< HEAD
import { color } from "framer-motion";
=======
>>>>>>> ac0cb2b0be79d226cd64bbb034465202d4c26da4
import React from "react";

import { NavLink, Navigate } from "react-router-dom"

function MyPageNavbar() {
    return (
        <div id="MyPageNavbar">
            <nav className="my-nav">
<<<<<<< HEAD
                <div className="nav-title">
                    마이페이지
                </div>
                <div className="nav-user">

                    <div className="user-photo">
                        <div style={{ width: "100px", height: "100px", borderRadius: "50px", backgroundColor: "red" }}></div>
                    </div>
                    <div className="user-name">
                        <div className="user-level">B 배찌</div>
                        <div className="user-name">김싸피</div>
                    </div>
                </div>
                <li>
                    <NavLink to="/mypage">내 정보</NavLink>
                </li>

                <li>
                    <NavLink to="/mypage/myaccompany">동행</NavLink>
                </li>

                <li>
                    <NavLink to="/mypage/mychat">채팅</NavLink>
                </li>

                <li>
                    <NavLink to="/mypage/myfollow">팔로우</NavLink>
                </li>

                <li>
                    <NavLink to="/mypage/signout">탈퇴하기</NavLink>
                </li>

=======
                이거는 내비바
                <li>
                    <NavLink to="/mypage" style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}>나의 정보</NavLink>
                </li>
                
                <li>
                    <NavLink to="/mypage/editprofile" style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}>정보 수정</NavLink>
                </li>
                
                <li>
                    <NavLink to="/mypage/editpassword" style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}>비밀번호 변경</NavLink>
                </li>
                
                <li>
                    <NavLink to="/mypage/signout" style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}>탈퇴하기</NavLink>
                </li>
                
>>>>>>> ac0cb2b0be79d226cd64bbb034465202d4c26da4
            </nav>
        </div>
    );
}

export default MyPageNavbar;
