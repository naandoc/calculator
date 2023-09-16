import { type ReactElement, useState } from 'react';
import './DigitationField.css';

const DigitationField = (): ReactElement => {
  // state that will monitor the value entered by the user
  const [valueInput, setValueInput] = useState('');

  // function that checks what the user typed
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // if you entered a string of numbers,
    // it is converted to number, otherwise it only returns
    const valueIsNumber = e.target.value;

    if (isNaN(Number(valueIsNumber))) return;

    setValueInput(valueIsNumber);

    console.log(valueIsNumber);
  };

  return (
    <div className="typing-field">
      <input
        onChange={handleInputChange}
        type="text"
        value={valueInput}
        placeholder="0"
      />
    </div>
  );
};

export default DigitationField;
