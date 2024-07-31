import { useState } from "react";

const App = () => {
  const [ message, setMessage ] = useState('Start')
  
  const handleButtonClick = () => {
    setMessage('HELLO WORLD')
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
