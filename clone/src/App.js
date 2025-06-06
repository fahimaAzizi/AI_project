import './App.css';

function App() {
  return (
   <div className ="App">
    <div className="sidebar">
      
      <div className='upperSid'>
        <div className='upperSideTop'><img src={gptLogo} className='logo'/>chatGPT</div>
       <button className='midBtn'><img className='addBtn' src=''></img>New chat</button>
       <div className='upperSideBttom'>
       <button className='query'>What is Programming?</button>
        <button className='query'>What is Programming?</button>
       </div>

      </div>
      <div className='lowerSide'>
        <div className='listItems'><img src='' className='listitemsImg'></img>Home</div>
        <div className='listItems'><img src='' className='listitemsImg'></img>Saved</div>
        <div className='listItems'><img src='' className='listitemsImg'></img>Upgrade to prok</div>
        

      </div>
      <div className='main'>

      </div>
    </div>
   </div>
  );
}

export default App;
