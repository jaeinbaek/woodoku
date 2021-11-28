function BoardCol({value, rowIndex, colIndex, deliverClickIndex, deliverMouserOverIndex}) {

  const deliverClickFunc = () => {
    deliverClickIndex(rowIndex, colIndex)
  }

  const deliverOverFunc = (e) => {
    deliverMouserOverIndex(rowIndex, colIndex, e.type)
  }

    // For 3*3 Checkerboard pattern (CSS class)
    if ( rowIndex === 3 || rowIndex === 4 || rowIndex === 5  ) {
      if ( colIndex === 3 || colIndex === 4 || colIndex === 5  ) {
        return (
          <div 
            className={value === 0 ? "board-col" : value === 1 ? "board-col placed" : "board-col overlay"}
            onClick={deliverClickFunc}
            onMouseOver={deliverOverFunc}
            onMouseLeave={deliverOverFunc}
          >
          </div>
        );
      }
      else {
        return (
          <div 
            className={value === 0 ? "board-col-bright" : value === 1 ? "board-col placed" : "board-col overlay"}
            onClick={deliverClickFunc}
            onMouseOver={deliverOverFunc}
            onMouseLeave={deliverOverFunc}
          >
          </div>
        );
      }
    }
    else {
      if ( colIndex === 0 || colIndex === 1 || colIndex === 2 || colIndex === 6 || colIndex === 7 || colIndex === 8  ) {
        return (
          <div 
            className={value === 0 ? "board-col" : value === 1 ? "board-col placed" : "board-col overlay"}
            onClick={deliverClickFunc}
            onMouseOver={deliverOverFunc}
            onMouseLeave={deliverOverFunc}
          >
          </div>
        );
      }
      else {
        return (
          <div 
            className={value === 0 ? "board-col-bright" : value === 1 ? "board-col placed" : "board-col overlay"}
            onClick={deliverClickFunc}
            onMouseOver={deliverOverFunc}
            onMouseLeave={deliverOverFunc}
          >
          </div>
        );
      }
    }

  }
  
  export default BoardCol;
  