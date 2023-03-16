import { useState, useEffect, useRef } from "react";
import CodeContainer from "./CodeContainer";
import GameContainer from "./GameContainer";
import "./App.css";

export const App = () => {
  const [code, setCode] = useState<string>("// ここにTypeScriptコードを書いてください。");
  const [message, setMessage] = useState<string>("");
  const [autoExecute, setAutoExecute] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleAutoExecuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAutoExecute(e.target.checked);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <GameContainer width={windowSize.width / 2} height={windowSize.height} />
        <div className="execute-controls">
          <button>実行</button>
          <label>
            <input type="checkbox" checked={autoExecute} onChange={handleAutoExecuteChange} />
            auto
          </label>
        </div>
      </div>
    </div>
  );
};
