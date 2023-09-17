import { type ReactElement } from 'react';
import styles from './Buttom.module.css';

interface ButtomProps {
  colorBg: string;
  digitButtom: string;
  digitEvent: (e: React.MouseEvent) => void;
}

const Buttom = ({
  colorBg,
  digitButtom,
  digitEvent,
}: ButtomProps): ReactElement => {
  return (
    <>
      <li onClick={digitEvent} className={styles[colorBg]}>
        {digitButtom}
      </li>
    </>
  );
};

export default Buttom;
