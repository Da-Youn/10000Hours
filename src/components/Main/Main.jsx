import React from 'react';
import { useState } from 'react';
import Inputs from './Inputs/Inputs';
import Result from './Result/Result';
import ResultLoad from './Result/ResultLoad';

function Main() {
  const [field, setField] = useState('');
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <main>
      <h2 className="a11y">나의 1만 시간의 법칙 알아보기</h2>
      <Inputs setField={setField} setTime={setTime} setLoading={setLoading} />
      {loading ? <ResultLoad /> : <Result field={field} time={time} />}
    </main>
  );
}

export default Main;
