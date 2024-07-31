import { useState } from "react";

const App= () => {
  const [ message, setMessage ] = useState('Start')
  
  const handleButtonClick = async () => {
    const response = await fetch('/api');
    const json = await response.json();
    const newMessage = json.message;
    console.log(newMessage)
    setMessage(newMessage)
  }

  return (
    <div>
      <h1>HELLO WORLD</h1>
      {message && <p>Message is: {message}</p>}
      <p>Message has got length {message.length}</p>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

export default App;
