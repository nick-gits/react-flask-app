import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [status, setStatus] = useState(0);
    const [message, setMessage] = useState( '' );

    function doSomething(e) {
        var x = "/secret?word=" + message;
        fetch(x).then(res => res.json()).then(data => {
          setStatus(data.status);
        });
        e.preventDefault();
    }

    return (
    <div className="App">
        <form onSubmit={doSomething}>
            <input
                type="text"
                value={message}
                placeholder="Enter the secret word"
                onChange={e => setMessage(e.target.value)}
            />
            <button>Submit</button>
        </form>
        <header className="App-header">
            <p> <strong>{message}</strong> </p>
            Hint: The secret word is abc
            <p>Status: {status}.</p>
        </header>
    </div>
  );
}

export default App;
