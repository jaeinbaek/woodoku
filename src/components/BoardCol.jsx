function BoardCol({value, rowIndex, colIndex, deliver}) {

  const deliverFunc = () => {
    deliver(rowIndex, colIndex)
  }
    // For 3*3 Checkerboard pattern (CSS class)
    if ( rowIndex === 3 || rowIndex === 4 || rowIndex === 5  ) {
      if ( colIndex === 3 || colIndex === 4 || colIndex === 5  ) {
        return (
          <div 
            className={value === 0 ? "board-col" : "board-col placed"}
            onClick={deliverFunc}
          >
          </div>
        );
      }
      else {
        return (
          <div 
            className={value === 0 ? "board-col-bright" : "board-col placed"}
            onClick={deliverFunc}
          >
          </div>
        );
      }
    }
    else {
      if ( colIndex === 0 || colIndex === 1 || colIndex === 2 || colIndex === 6 || colIndex === 7 || colIndex === 8  ) {
        return (
          <div 
            className={value === 0 ? "board-col" : "board-col placed"}
            onClick={deliverFunc}
          >
          </div>
        );
      }
      else {
        return (
          <div 
            className={value === 0 ? "board-col-bright" : "board-col placed"}
            onClick={deliverFunc}
          >
          </div>
        );
      }
    }

  }
  
  export default BoardCol;
  