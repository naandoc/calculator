import { type ReactElement } from 'react';
import Buttom from '../buttons/Buttom';
import './NumericKeyboard.css';

const NumericKeyboard = (): ReactElement => {
  const handleEventDigit = (e: React.MouseEvent): void => {
    const targetEl = e.target as HTMLLIElement;

    console.log(targetEl.innerText);
  };

  return (
    <div className="key-board">
      <Buttom digitEvent={handleEventDigit} colorBg="bgWhite" digitButtom="(" />
      <Buttom digitEvent={handleEventDigit} colorBg="bgWhite" digitButtom=")" />

      <Buttom digitEvent={handleEventDigit} colorBg="bgWhite" digitButtom="%" />
      <Buttom
        digitEvent={handleEventDigit}
        colorBg="bgWhite"
        digitButtom="AC"
      />
      <Buttom digitEvent={handleEventDigit} colorBg="" digitButtom="7" />
      <Buttom digitEvent={handleEventDigit} colorBg="" digitButtom="8" />
      <Buttom digitEvent={handleEventDigit} colorBg="" digitButtom="9" />
      <Buttom digitEvent={handleEventDigit} colorBg="bgWhite" digitButtom="/" />
      <Buttom digitEvent={handleEventDigit} colorBg="" digitButtom="4" />
      <Buttom digitEvent={handleEventDigit} colorBg="" digitButtom="5" />
      <Buttom digitEvent={handleEventDigit} colorBg="" digitButtom="6" />
      <Buttom digitEvent={handleEventDigit} colorBg="bgWhite" digitButtom="x" />
      <Buttom digitEvent={handleEventDigit} colorBg="" digitButtom="1" />
      <Buttom digitEvent={handleEventDigit} colorBg="" digitButtom="2" />
      <Buttom digitEvent={handleEventDigit} colorBg="" digitButtom="3" />
      <Buttom digitEvent={handleEventDigit} colorBg="bgWhite" digitButtom="-" />
      <Buttom digitEvent={handleEventDigit} colorBg="" digitButtom="0" />
      <Buttom digitEvent={handleEventDigit} colorBg="" digitButtom="." />
      <Buttom digitEvent={handleEventDigit} colorBg="bgBlue" digitButtom="=" />
      <Buttom digitEvent={handleEventDigit} colorBg="bgWhite" digitButtom="+" />
    </div>
  );
};

export default NumericKeyboard;
