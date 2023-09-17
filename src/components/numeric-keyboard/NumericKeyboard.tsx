import { type ReactElement } from 'react';
import Buttom from '../buttons/Buttom';

const NumericKeyboard = (): ReactElement => {
  const handleEventDigit = (e: React.MouseEvent): void => {
    const targetEl = e.target as HTMLLIElement;

    console.log(targetEl.innerText);
  };

  return (
    <div>
      <Buttom
        digitEvent={handleEventDigit}
        colorBg="bgWhite"
        digitButtom="10"
      />
      {/* <Buttom colorBg="bgWhite" digitButtom="10" />
      <Buttom colorBg="" digitButtom="5" />
      <Buttom colorBg="" digitButtom="25" /> */}
    </div>
  );
};

export default NumericKeyboard;
