import { useState } from "react";
import CodeContainer from "./CodeContainer";
import "./App.css";

export const App = () => {
  const [code, setCode] = useState<string>("// ここにTypeScriptコードを書いてください。");

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <div className="container">
      <CodeContainer code={code} onCodeChange={handleCodeChange} />
      <div className="game-container">
        {/* ゲーム画面が表示される領域 */}
      </div>
    </div>
  );
};
