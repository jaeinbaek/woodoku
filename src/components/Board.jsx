import { useState } from 'react';
import BoardRow from './BoardRow';
import switchBlocks from './switchBlocks.js';


// Function for declare board
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

  const deliverClickIndex = (row, col) => {
    setBlock(row, col)
  }

  const boardRowMap = board.map((row, index) => (<BoardRow value={row} rowIndex={index} deliver={deliverClickIndex} key={index}></BoardRow>))
  
  const deliverChoiceBlock = () => {

  }

  const setBlock = (sRow, sCol) => {
    let tempBoard = board
    let settedBoard = switchBlocks(tempBoard, 5, sRow, sCol)
    
    if (settedBoard == 0 ) {
      console.log("nothing to do")
    }
    else if (typeof settedBoard == "object"){
      setBoard([...settedBoard])
    }
    
    
  }

  return (
    <div>
      <div className="board">
        {boardRowMap}
      </div>
      <div className="tray">
        gen block here
      </div>
    </div>
  );
}

export default Board;
