function RenderBlockCol({value}) {
    return (
      <div 
        className={value === 0 ? "tray-block" : "tray-block placed"}
      >
      </div>
    );
  }
  
  export default RenderBlockCol;
  