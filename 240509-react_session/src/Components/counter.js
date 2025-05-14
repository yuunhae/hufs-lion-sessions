//counter.js
import React, { useState, useEffect } from 'react';

function Counter() {
  
  const [number, setNumber] = useState(0);

	//useState 추가
  const [text, setText] = useState('');

  //textUpdate 함수 추가
  const textUpdate = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("숫자 변동 감지");
  }, [number]); //배열 인자로 number 입력

  useEffect(() => {
    console.log("글자 변동 감지")
  }, [text]) //배열 인자로 text 입력
  

  const onIncrease = () => {
    setNumber(number + 1);
  }

  const onDecrease = () => {
    setNumber(number - 1);
  }
	//전체를 감싸는 div와 안쪽에 input 태그 추가
  return (
    <div>
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
    <input type='text' value={text} onChange={textUpdate}></input>
    </div>
  );
}

export default Counter;