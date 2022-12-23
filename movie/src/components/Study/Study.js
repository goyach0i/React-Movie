import React from "react";

const Study = () => {
  //JSX 문법
  // 1. class -> className
  // 2. 부모 div가 있어야함.
  // 3. JSX에는 IF문이 없다.
  // 4. 인라인 CSS는 카멜로 표현한다.
  // 5. 무조건 태그는 닫는다.

  // 리액트는 let 아니면 const만 활용 var는 이제 bye bye~
  const name = '메시';
  // if가 아닌 삼항연산자로 표현한다. (왼쪽은 참, 오른쪽은 거짓)

  //CSS 카멜로 포현!🙄
  const style = {
    fontsize: '32px',
    backgroundColor: 'red'
  };
  return (
    <>
    <div>{ name === '메시' ? <h2>메시!</h2> : <h2>호날두!</h2>}</div>
    <div style={style}>인라인 CSS</div>
    <input value={'Hello World!'}></input>
    </>
  )
};

export default Study;
