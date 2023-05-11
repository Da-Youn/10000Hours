import React from 'react';
import loadImg from '../../assets/img/loading.png';
import '../../assets/css/ResultLoad.css';

function ResultLoad() {
  return (
    <div className="result-load">
      <img class="load-img" src={loadImg} alt="loading 이미지" />
    </div>
  );
}

export default ResultLoad;
