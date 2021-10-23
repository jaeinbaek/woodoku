import BoardCol from "./BoardCol";

function BoardRow(props) {
  console.log(props.value)
  const boardColMap = props.value.map((col, index) => (<BoardCol value={col} key={index}></BoardCol>))
          
  return (
    <div className="board_row">
      {boardColMap}
    </div>
  );
}
  
export default BoardRow;
  