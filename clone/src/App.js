import './App.css';
import gptLogo from './assets/chatGPT.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/bokmark.svg';
import saved from './assets/rocket.svg';
import rocket from './assets/send.svg';
import sendBtn from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import userIcon from './assets/user-icon.png'; // Assuming this was missing

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSid">
          <div className="upperSideTop">
            <img src={gptLogo} className="logo" alt="GPT Logo" />
            ChatGPT
          </div>
          <button className="midBtn">
            <img className="addBtn" src={addBtn} alt="Add" />
            New chat
          </button>
          <div className="upperSideBttom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Programming?
            </button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems">
            <img src={home} className="listitemsImg" alt="Home" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} className="listitemsImg" alt="Saved" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} className="listitemsImg" alt="Upgrade" />
            Upgrade to Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="User" />
            <p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="chat">
            <img className="chatImg" src={gptImgLogo} alt="GPT" />
            <p className="txt">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" />
            <button className="send"><img src={sendBtn} alt="Send" /></button>
          </div>
          <p className="disclaimer">
            ChatGPT may produce inaccurate information about people, places, or facts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
