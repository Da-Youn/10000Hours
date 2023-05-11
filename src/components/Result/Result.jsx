import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import '../../assets/css/Result.css';

function Result({ field, time }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleCopyClick = () => {
    const url = window.location.href;
    const textField = document.createElement('textarea');
    textField.innerText = url;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    alert('URL이 복사되었습니다.');
  };

  return (
    <div className="result">
      {field && time && (
        <div>
          <div className="result-text">
            <p>
              당신은 <strong className="result-field">{field}</strong> 전문가가 되기 위해서
            </p>
            <p>
              대략 <strong className="result-day">{time}</strong> 일 이상 훈련하셔야 합니다! :)
            </p>
          </div>
          <div className="result-info">
            <button className="modal-btn" type="button" onClick={handleModalOpen}>
              훈련하러 가기 GO!GO!
            </button>
            <button className="share-btn" type="button" onClick={handleCopyClick}>
              공유하기
            </button>
          </div>
          {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
        </div>
      )}
    </div>
  );
}

export default Result;
