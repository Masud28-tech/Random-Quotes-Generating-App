import { useState } from "react";
import $ from 'jquery';

function App() {
  const [quote, setQuote ] = useState('');
  const [author, setAuthor] = useState('');

  const config = {
    "async": true,
    "crossDomain": true,
    "url": 'https://type.fit/api/quotes',
    "method": "GET"
  }
  const handleChange = async (e) => {
    $.ajax(config).done(function (response) {
      const quotes = JSON.parse(response);
      const randIndex = Math.round(Math.random() * quotes.length);
      const quote = quotes[randIndex];
      setQuote(quote.text);
      setAuthor('-' + quote.author);
    });
  }
  return (
    <div className="App">
      <div id="quote-box container-fluid">
        <div id="text">{quote}</div>
        <div id="author">{author}</div>
        <button id="new-quote" onClick={handleChange}>New Quote</button>
        <div id="links">
          <span id="tweet-quote"></span>
        </div>
      </div>
    </div>
  );
}

export default App;
