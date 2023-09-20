import { useState, type ReactElement, createContext, useRef } from 'react';
import DigitationField from './components/digitation-field/DigitationField';
import NumericKeyboard from './components/numeric-keyboard/NumericKeyboard';
import './App.css';

//  context
export const DigitationContext = createContext<any>(null);

function App(): ReactElement {
  // ref for input
  const inputRef = useRef(null);

  const [valueInput, setValueInput] = useState('');

  return (
    <>
      <section>
        <DigitationContext.Provider value={{ valueInput, setValueInput }}>
          <DigitationField inputRef={inputRef} />
          <NumericKeyboard inputRef={inputRef} />
        </DigitationContext.Provider>
      </section>
    </>
  );
}

export default App;
