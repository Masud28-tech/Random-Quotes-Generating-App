import { useState } from "react";
import $ from 'jquery';

function App() {
  const { quote, setQuote } = useState('');
  const config = {
    "async": true,
    "crossDomain": true,
    "url": 'https://api.quotable.io/random',
    "method": "GET"
  }
  const handleChange = async (e) => {
    console.log("Loading...");
    $.ajax(config).done(function (response) {
      console.log(response);
    });
  }
  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">{quote}</div>
        <div id="author"></div>
        <button id="new-quote" onClick={handleChange}>New Quote</button>
        <div id="links">
          <span id="tweet-quote"></span>
        </div>
      </div>
    </div>
  );
}

export default App;
