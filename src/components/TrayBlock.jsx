function TrayBlock({blockCode, codeDeliver, indexDeliver, trayIndex}) {
    const setBlockInfo = () => {
        codeDeliver(blockCode)
        indexDeliver(trayIndex)
    }
  return (
    <div 
        className="trayBlockArea"
        onClick={setBlockInfo}
    >
        {blockCode}
    </div>
  );
}
  
export default TrayBlock;
  