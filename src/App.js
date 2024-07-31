import { useState, useEffect } from "react";
import $ from 'jquery';

function App() {
  const [quote, setQuote] = useState('');
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

  useEffect(() => {
    $.ajax(config).done(function (response) {
      const quotes = JSON.parse(response);
      const quote = quotes[0];
      setQuote(quote.text);
      setAuthor('-' + quote.author);
    });
  }, []);

  return (
      <div id="quote-box" className="container text-center">
        <div id="text">{quote}</div>
        <div id="author">{author}</div>
        <div id="links" className="container-fluid">
          <button className="btn btn-primary" id="new-quote" onClick={handleChange}>
            New Quote
          </button>
          <a target="_blank" href="https://x.com/intent/post" className="btn btn-info text-white" id="tweet-quote" rel="noreferrer">
            Tweet Quote
          </a>
        </div>
      </div>
  );
}

export default App;
