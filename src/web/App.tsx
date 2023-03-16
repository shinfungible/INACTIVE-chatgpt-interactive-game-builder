import { useState } from "react";
import CodeContainer from "./CodeContainer";
import "./App.css";

export const App = () => {
  const [code, setCode] = useState<string>("// ここにTypeScriptコードを書いてください。");
  const [message, setMessage] = useState<string>("");

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="container">
      <div className="left">
        <CodeContainer code={code} onCodeChange={handleCodeChange} />
        <div className="chat-input">
          <input
            className="text-interface"
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="ChatGPT APIに入力"
          />
        </div>
      </div>
      <div className="game-container">
        {/* ゲーム画面が表示される領域 */}
      </div>
    </div>
  );
};
