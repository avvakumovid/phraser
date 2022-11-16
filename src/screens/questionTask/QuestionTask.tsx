import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import QuestionButton from '../../components/common/Buttons/QuestionButton/QuestionButton';
import Player from '../../components/common/Player/Player';
import Layout from '../../components/layout/Layout';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IColors, Task } from '../../types/types';
import styles from './QuestionTask.module.scss';
interface QuestionTaskProps {
  colors: IColors;
  dark: boolean;
}

const QuestionTask: FC<QuestionTaskProps> = ({ colors, dark }) => {
  const { index } = useParams();
  const { tasks } = useAppSelector(state => state.main);

  const [buttonNumber, setButtonNumber] = useState(1);
  const [task, setTask] = useState<Task | null>(null);
  const [pressBtn, setPressBtn] = useState(false);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    if (index) {
      const task = tasks[+index];
      setTask(task);
      setPressBtn(false);
    }
  }, [index, tasks]);

  return (
    <Layout
      isFooter={true}
      linkTo={index === '0' ? '/QuestionTask/1' : '/startTask/1'}
      onRightClick={() => {
        setButtonNumber(1);
      }}
    >
      {task ? (
        <div className={styles.container}>
          <div
            onClick={() => {
              if (buttonNumber === 1) {
                setButtonNumber(prev => prev + 1);
              }
            }}
            className={styles.heading}
          >
            <Player
              pulse={buttonNumber === 1}
              colors={colors}
              dark={dark}
              key={'audio1'}
              url={task.audio1}
            />
            <span>{task.phrase}</span>
          </div>
          {!pressBtn ? (
            <div
              onClick={() => {
                setShowContent(true);
              }}
              className={styles.question}
            >
              <QuestionButton
                disabled={buttonNumber <= 1}
                anim={buttonNumber === 2}
                dark={dark}
                onClick={() => {
                  if (buttonNumber === 2) {
                    setButtonNumber(prev => prev + 1);
                  }
                  setPressBtn(true);
                }}
              />
            </div>
          ) : (
            <div
              className={`${styles.content} `}
              style={{
                scale: showContent ? 100 : 0,
                
              }}
            >
              <div className={styles.image}>
                <img alt='pic' width='100%' src={task.image.toString()} />
              </div>
              <div className={styles.heading2}>
                <Player
                  disabled={buttonNumber <= 2}
                  onClick={() => {
                    if (buttonNumber === 3) {
                      setButtonNumber(prev => prev + 1);
                    }
                  }}
                  pulse={buttonNumber === 3}
                  colors={colors}
                  dark={dark}
                  key={'audio2'}
                  url={task.audio2}
                  isRevers={true}
                />
                <span>{task.explanation}</span>
              </div>
              <div className={styles.last}>
                <Player
                  disabled={buttonNumber <= 3}
                  pulse={buttonNumber === 4}
                  onClick={() => {
                    if (buttonNumber === 4) {
                      setButtonNumber(prev => prev + 1);
                    }
                  }}
                  colors={colors}
                  dark={dark}
                  key={'audio3'}
                  url={task.audio3}
                  isRevers={false}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Задача не найдена</p>
      )}
    </Layout>
  );
};

export default QuestionTask;
