"use client";
import React, { useState } from "react";
import styles from "@/app/styles/index.module.css";

const Board = () => {
  // 盤面 0無 1白 2黒
  const init = [...Array(8)].map(() => [...Array(8)].map(() => 0));
  init[3][3] = 1;
  init[3][4] = 2;
  init[4][3] = 2;
  init[4][4] = 1;
  const directions = [
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1], //左下
    [0, -1],
    [-1, -1],
    [-1, 0],
  ];
  const [board, setBoard] = useState(init);
  const [turnColor, setTurnColor] = useState(1); //先手黒

  const clickCell = (x: number, y: number) => {
    const newBoard = board.map((row) => [...row]);
    if (newBoard[y][x] === 0) {
      for (const direction of directions) {
        for (let distance = 1; distance < 8; distance++) {
          const nextY = y + direction[0] * distance;
          const nextX = x + direction[1] * distance;
          if (
            newBoard[nextY] === undefined ||
            newBoard[nextY][nextX] === undefined
          )
            break;

          if (newBoard[nextY][nextX] === 0) break;

          if (newBoard[nextY][nextX] === turnColor) {
            if (distance > 1) {
              for (let back = distance; back >= 0; back--) {
                board[y + direction[0] * back][x + direction[1] * back] =
                  turnColor;
              }
              setBoard(board);
              setTurnColor(3 - turnColor);
            }
            break;
          }

          if (newBoard[nextY][nextX] === 3 - turnColor) continue;
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div
              className={styles.cell}
              key={`${x}-${y}`}
              onClick={() => clickCell(x, y)}
            >
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ backgroundColor: color === 1 ? "#000" : "#fff" }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
