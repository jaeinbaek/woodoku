import { useState, useEffect } from 'react';
import BoardRow from './BoardRow';
import TrayBlock from './TrayBlock';
import switchBlocks from './switchBlocks.js';
import simSwitchBlocks from './simSwitchBlocks.js';
import overlaySwitchBlocks from './overlaySwitchBlocks.js';


// Function for declare board
function create2DArray(row, col) {
  let arr = new Array(row);
  for (let i = 0; i < row; i ++) {
    arr[i] = new Array(col);
    arr[i].fill(0);
  }
  return arr;
}
// Function for genarate random tray
function createRandomTray() {
  let tempArr = []
  const min = Math.ceil(1)
  const max = Math.floor(5)
  for (let i = 1; i <= 3; i++) {
    tempArr.push(Math.floor(Math.random() * (max - min + 1)) + min)
  }
  return tempArr
}
  
function Board() {
  const [board, setBoard] = useState(create2DArray(9, 9))
  const [score, setScore] = useState(0)
  const [blockCode, setBlockCode] = useState(0)
  const [blockIndexInTrayArr, setBlockIndexInTrayArr] = useState(0)
  const [trayBlockArr, setTrayBlockArr] = useState(createRandomTray())
  const [overlayBoard, setOverlayBoard] = useState()

  useEffect(() => {
    // Simulate tray after change that
    simulateTray()
  }, [trayBlockArr]);

  const deliverClickIndex = (row, col) => {
    setBlock(row, col)
  }

  const deliverMouserOverIndex = (row, col, status) => {
    overlayBlock(row, col, status)
  }

  const boardRowMap = board.map((row, index) => (<BoardRow value={row} rowIndex={index} deliverClickIndex={deliverClickIndex} deliverMouserOverIndex={deliverMouserOverIndex} key={index}></BoardRow>))
  const trayBlockMap = trayBlockArr.map((blockCode, index) => (<TrayBlock blockCode={blockCode} codeDeliver={setBlockCode} indexDeliver={setBlockIndexInTrayArr} trayIndex={index} key={index}></TrayBlock>))

  const setBlock = (sRow, sCol) => {
    let tempBoard = board
    let settedBoard = switchBlocks(tempBoard, blockCode, sRow, sCol)
    if (settedBoard === 0 ) {
      console.log("nothing to do")
    }
    else if (typeof settedBoard == "object"){
      setBoard([...settedBoard])
      setBlockCode(0)
      checkerAfterBlockSet()
    }
  }

  // Mouse over
  const overlayBlock = (sRow, sCol, status) => {
    let settedBoard = ''
    switch (status) {
      case 'mouseover':
        setOverlayBoard(board)
        settedBoard = overlaySwitchBlocks(board, blockCode, sRow, sCol)
        if (typeof settedBoard === "object"){
          setBoard([...settedBoard])
        }
        break;
      case 'mouseleave':
        console.log('mouseLeave')
        setBoard([...overlayBoard])
        break;
      default:
        break;
    }
  }

  // Action After Block Set
  const checkerAfterBlockSet = () => {
    let copyOfBoard = board
    checkToClear(copyOfBoard)
    trayBlockArr.splice(blockIndexInTrayArr, 1, 0)
    // check blockTray empty
    let sumOfTray = 0
    for (let i = 0; i < 3; i++) {
      sumOfTray += trayBlockArr[i]
    }
    if ( sumOfTray === 0 ) {
      changeRandomTray()
    }
    // Simulate game
    simulateTray()
  }

  // Board Zone Geo Code (3*3 zone)
  const defGeo = {
    1: {1:0, 2:0, 3:2, 4:2}, 2: {1:0, 2:3, 3:2, 4:5}, 3: {1:0, 2:6, 3:2, 4:8},
    4: {1:3, 2:0, 3:5, 4:2}, 5: {1:3, 2:3, 3:5, 4:5}, 6: {1:3, 2:6, 3:5, 4:8},
    7: {1:6, 2:0, 3:8, 4:2}, 8: {1:6, 2:3, 3:8, 4:5}, 9: {1:6, 2:6, 3:8, 4:8}
  }
  // Check Cell to Clear
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

  // Function for random tray
  function changeRandomTray() {
    let tempArr = []
    const min = Math.ceil(1)
    const max = Math.floor(5)
    for (let i = 1; i <= 3; i++) {  
      tempArr.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    setTrayBlockArr(tempArr)
  }

  const simulateTray = () => {
    let setCount = 0
    let emptyTrayCount = 0
    // for each tray block
    for (let i = 0; i < trayBlockArr.length; i++) {
      if ( trayBlockArr[i] !== 0 ) {
        // for each row 
        for (let j = 0; j < 9; j++) {
          // for each col
          for (let k = 0; k < 9; k++) {
            if ( board[j][k] === 0 ) {
              setCount += simulateBlockSet(board, trayBlockArr[i], j, k)
            } 
          }
        }
      }
      else if ( trayBlockArr[i] === 0 ) {
        emptyTrayCount ++
      }
    }
    if ( setCount === 0 && emptyTrayCount === 3) {
    }
    else if (setCount === 0 ){
      console.error('gameover')
    }
    else if (setCount !== 0 ){
    }
  }

  const simulateBlockSet = (simBoard, blockCode, sRow, sCol) => {
    let simSettedBoard = 0
    if ( blockCode !== 0 ) {
      simSettedBoard = simSwitchBlocks(simBoard, blockCode, sRow, sCol)
    } 
    if ( simSettedBoard === 0 ) {
      return 0
    }
    else if ( simSettedBoard === 1 ){
      return 1
    }
  }

  return (
    <div>
      <div className="score">
        <div className="score-text">
        {score}
        </div>
      </div>
      <div className="board">
        {boardRowMap}
      </div>
      <div className="tray">
        {trayBlockMap}
      </div>
    </div>
  );
}

export default Board;
