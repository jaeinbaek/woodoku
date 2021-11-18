function RenderBlockCol({value}) {
    return (
      <div 
        className={value === 0 ? "tray-block" : "tray-block placed"}
      >
        {value}
      </div>
    );
  }
  
  export default RenderBlockCol;
  