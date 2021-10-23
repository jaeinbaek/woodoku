import { useState, useEffect } from 'react';
import BoardRow from './BoardRow';
import '../css/Board.css';

function create2DArray(row, col) {
  let arr = new Array(row);
  for (let i = 0; i < row; i ++) {
    arr[i] = new Array(col);
    arr[i].fill(0);
  }
  return arr;
}

function Board() {
  const [board, setBoard] = useState(create2DArray(9, 9))
  const boardRowMap = board.map((row, index) => (<BoardRow value={row} key={index}></BoardRow>))

  return (
    <div className="board">
      {boardRowMap}
    </div>
  );
}

export default Board;
