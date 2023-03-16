// GameContainer.tsx
import React, { useEffect, useRef } from "react";
import Phaser from "phaser";

interface GameContainerProps {
  width: number;
  height: number;
}

const GameContainer: React.FC<GameContainerProps> = ({ width, height }) => {
  const gameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (gameRef.current) {
      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width,
        height,
        parent: gameRef.current,
        scene: {
          preload: function () {
            // ここにゲームのリソースをプリロードするコードを追加します。
          },
          create: function () {
            // ここでゲームのオブジェクトを作成します。
          },
          update: function () {
            // ここでゲームの更新を行います。
          },
        },
      };

      const game = new Phaser.Game(config);
      return () => {
        game.destroy(true);
      };
    }
  }, []);

  return <div ref={gameRef} />;
};

export default GameContainer;
