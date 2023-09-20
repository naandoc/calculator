import React, { type ReactElement, useContext } from 'react';
import './DigitationField.css';
import { DigitationContext } from '../../App';

interface inputRefType {
  inputRef: React.RefObject<HTMLInputElement>;
}

const DigitationField = ({ inputRef }: inputRefType): ReactElement => {
  const { valueInput, setValueInput } = useContext(DigitationContext);

  // function that checks what the user typed
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // regex for validation
    const valueRegex = /^[0-9()%/*\-+.]+$/;
    const valueIsNumber = e.target.value;

    if (valueIsNumber === '' || valueRegex.test(valueIsNumber)) {
      setValueInput(valueIsNumber);
    }
  };

  return (
    <div className="typing-field">
      <input
        ref={inputRef}
        onChange={handleInputChange}
        type="text"
        value={valueInput}
        placeholder="0"
      />
    </div>
  );
};

export default DigitationField;
