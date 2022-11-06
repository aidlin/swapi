import logo from './logo.svg';
import Home from './components/Home.js';
import './App.css';
import React from 'react';

class App extends React.Component {
  componentDidMount() {
    // pendo.initialize({
    //   visitor: {
    //     id: 'VISITOR-UNIQUE-ID'   // Required if user is logged in, default creates anonymous ID
    //     // email:        // Recommended if using Pendo Feedback, or NPS Email
    //     // full_name:    // Recommended if using Pendo Feedback
    //     // role:         // Optional

    //     // You can add any additional visitor level key-values here,
    //     // as long as it's not one of the above reserved names.
    //   },

    //   account: {
    //     id: 'ACCOUNT-UNIQUE-ID' // Required if using Pendo Feedback, default uses the value 'ACCOUNT-UNIQUE-ID'
    //     // name:         // Optional
    //     // is_paying:    // Recommended if using Pendo Feedback
    //     // monthly_value:// Recommended if using Pendo Feedback
    //     // planLevel:    // Optional
    //     // planPrice:    // Optional
    //     // creationDate: // Optional

    //     // You can add any additional account level key-values here,
    //     // as long as it's not one of the above reserved names.
    //   }
    // });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>
          <Home />
        </body>
      </div>
    );
  }
}

export default App;
