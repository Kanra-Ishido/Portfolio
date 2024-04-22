import React from 'react';
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";


const App = () => {

  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <body>
        <Body />
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
