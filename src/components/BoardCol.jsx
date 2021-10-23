function BoardCol(props) {
    return (
      <div className={props.value == 0 ? "board_col" : "board_col placed"}>
        {props.value}
      </div>
    );
  }
  
  export default BoardCol;
  