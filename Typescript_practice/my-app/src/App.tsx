import React, { useState } from "react";
import "./App.css";
// import Timer from "./Timer";
function App() {
  // const [showTimer, setShowTimer] = useState(false);
  // const numbers: number[] = [1, 2, 3, 4, 5];
  // const doubled1: number[] = numbers.map((number) => number * 1);
  // const doubled2: number[] = numbers.map((number, key) => number * key);
  // const aa: string = "ss";

  const [inputValue, setInputValue]: any = useState("");
  const [list, setList] = useState(["99", "98"]);

  const addToList = () => {
    console.log("리스트에 추가:");
    console.log(inputValue);
    setList((prevList) => {
      return [inputValue, ...prevList];
    });
    setInputValue(""); //setInputValue초기화
  };
  return (
    <div className="App">
      <input
        value={inputValue}
        onChange={(v) => setInputValue(v.target.value)}
      />
      <button onClick={addToList}>추가</button>
      <ul>
        {list.map((item) => {
          return (
            <div key={item}>
              <li>{item}</li>
              <input />
            </div>
          );
        })}
      </ul>
      {/* {showTimer && <Timer />}
      {aa === "dd" && <h1 className="yes">yes</h1>}
      {aa === "dd" || <h1 className="yes">no</h1>}

      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button> */}
    </div>
  );
}

export default App;
