import RenderBlockCol from "./RenderBlockCol";

function RenderBlockRow({value}) {
  const RenderBlockRowMap = value.map((col, index) => (<RenderBlockCol value={col} key={index}></RenderBlockCol>))

  return (
    <div 
      className="tray-block-row"
    >
      {RenderBlockRowMap}
    </div>
  );
}
  
export default RenderBlockRow;
  