import React, { useState } from "react";
import "./App.css";
import Timer from "./Timer";
function App() {
  const [showTimer, setShowTimer] = useState(false);
  const numbers: number[] = [1, 2, 3, 4, 5];
  const doubled1: number[] = numbers.map((number) => number * 1);
  const doubled2: number[] = numbers.map((number, key) => number * key);
  const aa: string = "ss";
  console.log(doubled1);
  console.log(doubled2);
  return (
    <div className="App">
      {showTimer && <Timer />}
      {aa === "dd" && <h1 className="yes">yes</h1>}
      {aa === "dd" || <h1 className="yes">no</h1>}

      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App;
