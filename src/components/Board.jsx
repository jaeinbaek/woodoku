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
  const [blockCode, setBlockCode] = useState(0)

  const deliverClickIndex = (row, col) => {
    setBlock(row, col)
  }

  const boardRowMap = board.map((row, index) => (<BoardRow value={row} rowIndex={index} deliver={deliverClickIndex} key={index}></BoardRow>))
  
  const setBlock = (sRow, sCol) => {
    let tempBoard = board
    let settedBoard = switchBlocks(tempBoard, blockCode, sRow, sCol)
    
    if (settedBoard == 0 ) {
      console.log("nothing to do")
    }
    else if (typeof settedBoard == "object"){
      setBoard([...settedBoard])
    }
  }




  // temp
  const passingBlockcode1 = () => {
    console.log("block setted (1)")
    setBlockCode(1)
  }
  const passingBlockcode2 = () => {
    console.log("block setted (2)")
    setBlockCode(2)
  }
  const passingBlockcode3 = () => {
    console.log("block setted (3)")
    setBlockCode(3)
  }
  const passingBlockcode4 = () => {
    console.log("block setted (4)")
    setBlockCode(4)
  }
  const passingBlockcode5 = () => {
    console.log("block setted (5)")
    setBlockCode(5)
  }

  return (
    <div>
      <div className="board">
        {boardRowMap}
      </div>
      <div className="tray">
        {/* temp */}
        <div className="tempBtn" onClick={passingBlockcode1}>1 || Horizotal 5 Length bar</div>
        <div className="tempBtn" onClick={passingBlockcode2}>2 || Horizotal 3 Length bar</div>
        <div className="tempBtn" onClick={passingBlockcode3}>3 || Vertical 5 Length Bar</div>
        <div className="tempBtn" onClick={passingBlockcode4}>4 || Vertical 3 Length Bar</div>
        <div className="tempBtn" onClick={passingBlockcode5}>5 || 2X2 Square</div>
      </div>
    </div>
  );
}

export default Board;
