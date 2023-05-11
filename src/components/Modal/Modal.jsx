import React from 'react';
import '../../assets/css/Modal.css';
import Licat from '../../assets/img/licat.png';

function Modal({ onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="Modal">
      <div className="modal-body">
        <h2 className="modal-title">
          화이팅<span>!!♥♥♥</span>
        </h2>
        <p className="modal-text">당신의 꿈을 응원합니다!</p>
        <img className="licat-img" src={Licat} alt="라이캣 이미지" />
        <button type="button" className="close-btn" onClick={handleClose}>
          <p>종료하고 진짜</p>
          <p>훈련하러 가기 GO!GO!</p>
        </button>
      </div>
    </div>
  );
}

export default Modal;
