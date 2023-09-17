import { type ReactElement } from 'react';
import DigitationField from './components/digitation-field/DigitationField';
import './App.css';
import NumericKeyboard from './components/numeric-keyboard/NumericKeyboard';

function App(): ReactElement {
  return (
    <>
      <section>
        <DigitationField />
        <NumericKeyboard />
      </section>
    </>
  );
}

export default App;
