import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonalContextProvider from './contexts/PersonalContext';
import ColorToggle from './components/ColorToggle';
import Personal from './components/Personal';

function App() {
  return (
    <div className="App">
      <PersonalContextProvider>
        <Personal/>
        <ColorToggle/>
      </PersonalContextProvider>
    </div>
  );
}

export default App;
