import React from "react";
import './Header.css'
import useImg from '../../images/user.png'

// return에 html작성
// const - 상수
// React를 할거면 Javascript 6 문법 공부 ===> 구글링 : ES6 문법
const Header = () => {
  // className은 React 문법 이걸 JSX라고 함.
  // JSX = Javascript Syntax Extension
  // 부모 div가 무조건 있어야 함. (React 문법)
  // class => className (React 문법 )

  //a태그는 내일 - 12.23
  return (
    <div className="header">
      <div className="logo">
        96CHOI's Movie Time
      </div>
      <div className="user-image">
        <img src={useImg} alt='유저사진'></img>
      </div>
    </div>
  );
};

export default Header;
