import './App.css';
 import gptLogo from './asseys/chatGPT.svg';
 import addBtn from'./assets/add-30.png';
 import magIcon from'./assets message.svg';
import msgIcon from'./assets/message.svg';
import home from'./assets/bokmark.svg';
import saved from './assets/rocket.svg';
import rocket from './assets/send.svg' ;
import sendBtn from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg'



function App() {
  return (
   <div className ="App">
    <div className="sidebar">
      
      <div className='upperSid'>
        <div className='upperSideTop'><img src={gptLogo} className='logo'/>chatGPT</div>
       <button className='midBtn'><img className='addBtn' src=''></img>New chat</button>
       <div className='upperSideBttom'>
       <button className='query' ><img src={msgIcon} alt='Query'></img>What is Programming?</button>
        <button className='query'><img src={msgIcon} alt='Query'></img>What is Programming?</button>
       </div>

      </div>
      <div className='lowerSide'>
        <div className='listItems'><img src='home' className='listitemsImg'></img>Home</div>
        <div className='listItems'><img src='saved' className='listitemsImg'></img>Saved</div>
        <div className='listItems'><img src='rocket' className='listitemsImg'></img>Upgrade to prok</div>
        

      </div>
      <div className='main'>

      </div>
    </div>
   </div>
  );
}

export default App;
