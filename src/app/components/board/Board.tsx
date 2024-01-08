"use client";
import React, { useState } from "react";
import styles from "@/app/styles/index.module.css";

const Board = () => {
  const init = [...Array(8)].map(() => [...Array(8)].map(() => 0));
  init[3][3] = 1;
  init[3][4] = 2;
  init[4][3] = 2;
  init[4][4] = 1;

  const [board, setBoard] = useState(init);
  // const [board, setBoard] = useState([
  //   [0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 1, 2, 0, 0, 0],
  //   [0, 0, 0, 2, 1, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0],
  // ]);
  console.log(board);
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`}>
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
