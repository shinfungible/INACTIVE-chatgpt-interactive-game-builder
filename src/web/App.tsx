import { useState } from "react";
import "./App.css";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="code-container">
        {/* TypeScriptコードが表示される領域 */}
      </div>
      <div className="game-container">
        {/* ゲーム画面が表示される領域 */}
      </div>
    </div>
  );
};
