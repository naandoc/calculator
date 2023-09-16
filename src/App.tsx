import { type ReactElement } from 'react';
import DigitationField from './components/digitation-field/DigitationField';
import './App.css';

function App(): ReactElement {
  return (
    <>
      <section>
        <DigitationField />
      </section>
    </>
  );
}

export default App;
