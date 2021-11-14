function BoardCol({value, rowIndex, colIndex, deliver}) {

  const test = () => {
    // console.log(props.rowIndex)
    // console.log(props.colIndex)
    deliver(rowIndex, colIndex)
  }

    return (
      <div 
        className={value === 0 ? "board_col" : "board_col placed"}
        onClick={test}
      >
        {value}
      </div>
    );
  }
  
  export default BoardCol;
  