import React from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './components/Text'
import { Button } from './components/ButtonBase';
import { getCss } from "./components/ButtonBase/getButtonCss"
function App() {
  // *it will be alert missing type by props
  const css = getCss();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <Text title="oke" />
          <Button variant="primary" children={<span>Base Button</span>} />
      </header>
    </div>
  );
}

export default App;
