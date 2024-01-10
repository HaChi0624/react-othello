"use client";
import React, { useState } from "react";
import styles from "@/app/styles/index.module.css";
import { Direction, TurnColor, stone } from "@/app/types/stone";

const Board = () => {
  // 盤面
  const init: stone[][] = [...Array(8)].map(() => [...Array(8)].map(() => 0));
  init[3][3] = 1;
  init[3][4] = 2;
  init[4][3] = 2;
  init[4][4] = 1;
  const [board, setBoard] = useState<stone[][]>(init);

  // 白⇔黒　先手は黒
  const [turnColor, setTurnColor] = useState<TurnColor | number>(1);

  // 方向
  const directions: Direction[][] = [
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
  ];

  // オセロの動作
  const clickCell = (x: number, y: number) => {
    const newBoard: stone[][] = board.map((row) => [...row]);
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

          // 同じ色が合ったら実行
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
          // 返せる可能性があるなら続行
          if (newBoard[nextY][nextX] === 3 - turnColor) continue;
        }
      }
    }
  };

  // それぞれの個数
  const numberOfB: number = board.flat().filter((value) => value === 1).length;
  const numberOfW: number = board.flat().filter((value) => value === 2).length;

  return (
    <div className={styles.container}>
      <div>{turnColor === 1 ? "黒" : "白"}の手番です</div>
      <div>黒{numberOfB}個</div>
      <div>白{numberOfW}個</div>
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
