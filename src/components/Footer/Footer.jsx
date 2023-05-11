import React from 'react';
import WenivLogo from '../../assets/img/logo.png';
import '../../assets/css/Footer.css';
function Footer() {
  return (
    <div className="copyright">
      <img className="weniv-logo" src={WenivLogo} alt="" />
      <p className="copyright-text">
        ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.<br></br> 수정 및
        재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
      </p>
    </div>
  );
}

export default Footer;
