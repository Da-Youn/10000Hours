import React from 'react';
import titleLogo from '../../images/title.png';
import './Header.css';

function Header() {
  return (
    <header>
      <h1 className="title">
        <img className="title-img" src={titleLogo} alt="1만 시간의 법칙" />
      </h1>
      <div className="intro">
        <h2 className="a11y">1만 시간의 법칙 소개</h2>
        <p className="intro-quote">“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</p>
        <p className="intro-explain">
          <strong>1만 시간의 법칙</strong>은<br></br> 어떤 분야의 전문가가 되기 위해서는<br></br>
          최소한 1만 시간의 훈련이 필요하다는 법칙이다.
        </p>
      </div>
    </header>
  );
}

export default Header;
