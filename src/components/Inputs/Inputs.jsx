import React from 'react';
import '../../assets/css/Inputs.css';

function Inputs({ setField, setTime, setLoading }) {
  function handleSubmit(event) {
    event.preventDefault();

    const field = event.target.elements.field_text.value;
    const time = event.target.elements.time_text.value;

    if (!field || !time) {
      alert('모든 항목을 입력하세요!');
      setLoading(false);
      return;
    }
    if (time < 1 || isNaN(parseInt(time))) {
      alert('유효한 숫자를 입력하세요!');
      setLoading(false);
      return;
    }
    setField(field);
    setTime(Math.floor(10000 / time));
  }

  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <form className="inputs" onSubmit={handleSubmit}>
      <div className="field">
        <div className="text-wrapper ">
          <p>나는</p>
          <input id="field_text" type="text" placeholder="예) 프로그래밍" />
          <p>전문가가 될 것이다.</p>
        </div>
      </div>
      <div className="time">
        <p>그래서 앞으로 매일 하루에</p>
        <div className="text-wrapper">
          <input id="time_text" type="number" placeholder="예) 5시간" min="0" max="24" />
          <p>시간씩 훈력할 것이다.</p>
        </div>
      </div>
      <div className="start">
        <button type="submit" className="start-btn" onClick={handleClick}>
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
      </div>
    </form>
  );
}

export default Inputs;
