import React, { useState, useEffect } from 'react';
import Loading from './components/Loading.jsx';
import './App.css';
import MainPage from './components/MainPage.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate the loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change loading state after 2 seconds
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="App">
      <div>
        {isLoading ? <Loading/> : <MainPage/>}
      </div>
    </div>
  );
}

export default App;