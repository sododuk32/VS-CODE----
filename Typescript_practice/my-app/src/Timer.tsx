import { useEffect } from "react";
import React from "react";

function Timer(props: any) {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중..");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("타이머종료됨");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요</span>
    </div>
  );
}

export default Timer;
