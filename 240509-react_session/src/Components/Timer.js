import React, { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아갑니다");
    }, 1000);
		
		//return() => {} 함수 안에 clearInterval() 통해 클린업 함수 구현
    return() => {
        clearInterval(timer);
        console.log('종료');
    };
  }, []);

  return <div>타이머 시작 - 콘솔 출력</div>;
};

export default Timer;

