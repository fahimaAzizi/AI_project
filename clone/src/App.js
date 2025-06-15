import './App.css';
import gptLogo from './assets/chatGPT.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/bokmark.svg';
import saved from './assets/rocket.svg';
import rocket from './assets/send.svg';
import sendBtn from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import userIcon from './assets/user-icon.png';
import { useState } from 'react';
import { sendMsgToOpenAI } from './openai';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi I am ChatGPT, a state-of-the-art language model developed by OpenAI.",
      isBot: true,
    },
  ]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, isBot: false };
    setMessages(prev => [...prev, userMsg]);

    const res = await sendMsgToOpenAI(input);
    const botMsg = { text: res, isBot: true };
    setMessages(prev => [...prev, botMsg]);

    setInput("");
  };

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
          {messages.map((message, i) => (
            <div key={i} className={`chat ${message.isBot ? "bot" : ""}`}>
              <img
                className="chatImg"
                src={message.isBot ? gptImgLogo : userIcon}
                alt={message.isBot ? "Bot" : "User"}
              />
              <p className="txt">{message.text}</p>
            </div>
          ))}
        </div>

        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="Send" />
            </button>
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
