import React, { type ReactElement, useContext } from 'react';
import { DigitationContext } from '../../App';

import { evaluate } from 'mathjs';

import './DigitationField.css';

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

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      try {
        const result = evaluate(valueInput);
        setValueInput(Number(result));
      } catch (error) {
        setValueInput('');
        throw new Error('Operação inválida! \nDigite um valor válido');
      }
    }
  };

  return (
    <div className="typing-field">
      <input
        ref={inputRef}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
        type="text"
        value={valueInput}
        placeholder="0"
      />
    </div>
  );
};

export default DigitationField;
