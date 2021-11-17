function TrayBlock({blockCode, codeDeliver}) {
    const setBlockCode = () => {
        codeDeliver(blockCode)
    }
  return (
    <div 
        className="trayBlockArea"
        onClick={setBlockCode}
    >
        {blockCode}
    </div>
  );
}
  
export default TrayBlock;
  