function BoardCol({value, rowIndex, colIndex, deliver}) {

  const deliverFunc = () => {
    deliver(rowIndex, colIndex)
  }

    return (
      <div 
        className={value === 0 ? "board-col" : "board-col placed"}
        onClick={deliverFunc}
      >
        {value}
      </div>
    );
  }
  
  export default BoardCol;
  