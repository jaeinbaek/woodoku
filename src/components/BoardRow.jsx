import BoardCol from "./BoardCol";

function BoardRow({value, rowIndex, deliver}) {
  const boardColMap = value.map((col, index) => (<BoardCol value={col} rowIndex={rowIndex} colIndex={index} deliver={deliver} key={index}></BoardCol>))

  return (
    <div 
      className="board_row"
    >
      {boardColMap}
    </div>
  );
}
  
export default BoardRow;
  