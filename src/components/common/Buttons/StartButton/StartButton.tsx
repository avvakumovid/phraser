import * as React from 'react';
import styles from './StartButton.module.scss';

interface StartButtonProps {
  onClick: () => void;
  topColor: string;
  bottomColor: string;
}

const StartButton = ({ onClick, topColor, bottomColor }: StartButtonProps) => (
  <button
    className={`${styles.wrapper}  from-[${topColor}] to-[${bottomColor}]`}
    onClick={onClick}
  >
    <div>
      <span>Начать</span>
    </div>
  </button>
);

export default StartButton;
