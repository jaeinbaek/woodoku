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
  const [score, setScore] = useState(0)
  const [blockCode, setBlockCode] = useState(0)

  const deliverClickIndex = (row, col) => {
    setBlock(row, col)
  }

  const boardRowMap = board.map((row, index) => (<BoardRow value={row} rowIndex={index} deliver={deliverClickIndex} key={index}></BoardRow>))
  
  const setBlock = (sRow, sCol) => {
    let tempBoard = board
    let settedBoard = switchBlocks(tempBoard, blockCode, sRow, sCol)
    
    if (settedBoard === 0 ) {
      console.log("nothing to do")
    }
    else if (typeof settedBoard == "object"){
      setBoard([...settedBoard])
      checkScoreing()
    }
  }

  // Clear blocks
  const checkScoreing = () => {
    let copyOfBoard = board
    checkToClear(copyOfBoard)
  }

  // Board Zone Geo Code
  const defGeo = {
    1: {1:0, 2:0, 3:2, 4:2}, 2: {1:0, 2:3, 3:2, 4:5}, 3: {1:0, 2:6, 3:2, 4:8},
    4: {1:3, 2:0, 3:5, 4:2}, 5: {1:3, 2:3, 3:5, 4:5}, 6: {1:3, 2:6, 3:5, 4:8},
    7: {1:6, 2:0, 3:8, 4:2}, 8: {1:6, 2:3, 3:8, 4:5}, 9: {1:6, 2:6, 3:8, 4:8}
  }

  const checkToClear = (copyOfBoard) => {
    let toClear = {
      row: [],
      col: [],
      sqr: []
    }
    for (let i = 0; i < 9; i++) {
      let sumOfRow = 0;
      for (let j = 0; j < 9; j++) {
        sumOfRow += copyOfBoard[i][j] 
      }
      if (sumOfRow === 9) {
        toClear.row.push(i)
      }
    }

    for (let i = 0; i < 9; i++) {
      let sumOfCol = 0;
      for (let j = 0; j < 9; j++) {
        sumOfCol += copyOfBoard[j][i] 
      }
      if (sumOfCol === 9) {
        toClear.col.push(i)
      }
    }

    for (let i = 1; i < 10; i++) {
      let sumOfSquare = 0;
      for (let j = defGeo[i][1]; j <= defGeo[i][3]; j++) {
        for (let k = defGeo[i][2]; k <= defGeo[i][4]; k++) {
          sumOfSquare += copyOfBoard[j][k] 
        }
        if (sumOfSquare === 9) {
          toClear.sqr.push(i)
        }
      }
    }
    clearBoard(toClear)
  }

  const clearBoard = (toClear) => {
    let copyOfBoard = board
    let scoreByAction = 0
    for (let rmRow of toClear.row){
      for (let i = 0; i < 9; i++) {
        copyOfBoard[rmRow][i] = 0
        scoreByAction ++
      }
    }
    for (let rmCol of toClear.col){ 
      for (let i = 0; i < 9; i++) {
        copyOfBoard[i][rmCol] = 0
        scoreByAction ++
      }
    }
    for (let rmSqr of toClear.sqr){
      for (let j = defGeo[rmSqr][1]; j <= defGeo[rmSqr][3]; j++) {
        for (let k = defGeo[rmSqr][2]; k <= defGeo[rmSqr][4]; k++) {
          copyOfBoard[j][k] = 0
          scoreByAction ++
        }
      }
    }
    setScore(score + scoreByAction)
    setBoard([...copyOfBoard])
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
      <div className="score">
      </div>
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
