import BoardCol from "./BoardCol";

function BoardRow({value, rowIndex, deliverClickIndex, deliverMouserOverIndex}) {

  const boardColMap = value.map((col, index) => (<BoardCol value={col} rowIndex={rowIndex} colIndex={index} deliverClickIndex={deliverClickIndex} deliverMouserOverIndex={deliverMouserOverIndex} key={index}></BoardCol>))

  return (
    <div 
      className="board-row"
    >
      {boardColMap}
    </div>
  );
}
  
export default BoardRow;
  