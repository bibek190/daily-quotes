import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [quotes, setQuotes] = useState(0);

  async function handleClick() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    if (quotes >= 10) {
      return alert("You have reached maximum daily quotes ");
    }
    setQuotes(quotes + 1);
    setText(data.slip.advice);
  }

  return (
    <div className="App">
      <h1>Awesome Quotes</h1>
      <p>{text}</p>
      <div>
        <button onClick={handleClick}>Get Quotes</button>
      </div>
      <h3>You have requested {quotes} quotes.</h3>
    </div>
  );
}

export default App;
