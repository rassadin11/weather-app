import React from 'react';
import './styles/index.scss';
import Home from './pages/Home/components/Home/Home';
import Header from './components/Header/Header';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const { isLoading } = useSelector(state => state.currentWeather)

  return (
    <div className={isLoading ? `container addScrollBar` : `container`}>
      <Header />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;