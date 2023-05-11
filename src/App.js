import { useState } from 'react';
import React from 'react';
import Header from './components/Header/Header';
import './assets/css/App.css';
import './assets/css/reset.css';
import Intro from './components/Intro/Intro';
import Inputs from './components/Inputs/Inputs';
import Result from './components/Result/Result';
import ResultLoad from './components/Result/ResultLoad';
import Footer from './components/Footer/Footer';
import './assets/css/media.css';

function App() {
  const [field, setField] = useState('');
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className="container">
      <Header />
      <Intro />
      <Inputs setField={setField} setTime={setTime} setLoading={setLoading} />
      {loading ? <ResultLoad /> : <Result field={field} time={time} />}

      <Footer />
    </div>
  );
}

export default App;
