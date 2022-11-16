import React from 'react';
import styles from './QuestionButton.module.scss';
import QuestionButtonLight from '../../../../assets/img/qestionbtnL.svg';
import QuestionButtonDark from '../../../../assets/img/qestionbtnD.svg';
interface StartButtonProps {
  onClick: () => void;
  dark: boolean;
  anim: boolean;
  disabled: boolean;
}

const QuestionButton = ({
  onClick,
  dark,
  anim,
  disabled,
}: StartButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${anim ? styles.heart : null}`}
      onClick={() => {
        onClick();
      }}
    >
      <img
        width={'100%'}
        src={dark ? QuestionButtonDark : QuestionButtonLight}
        alt='start'
      />
    </button>
  );
};

export default QuestionButton;
