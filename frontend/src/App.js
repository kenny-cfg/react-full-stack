import { useState } from "react";
import Title from "./Title";
import MessageDetails from "./MessageDetails";

const App= () => {
  const [ message, setMessage ] = useState('Start')
  
  const handleButtonClick = async () => {
    const response = await fetch('/api');
    const json = await response.json();
    const newMessage = json.message;
    setMessage(newMessage)
  }

  return (
    <div>
      <Title/>
      <MessageDetails message={message}/>
      <button style={{
        backgroundColor: 'red'
      }} onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

export default App;
