import { type ReactElement } from 'react';
import './DigitationField.css';

const DigitationField = (): ReactElement => {
  return (
    <div>
      <input type="text" value={0} />
    </div>
  );
};

export default DigitationField;
