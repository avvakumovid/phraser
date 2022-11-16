import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import QuestionButton from '../../components/common/Buttons/QuestionButton/QuestionButton';
import Player from '../../components/common/Player/Player';
import Layout from '../../components/layout/Layout';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IColors, Task } from '../../types/types';

interface QuestionTaskProps {
  colors: IColors;
  dark: boolean;
}

const QuestionTask: FC<QuestionTaskProps> = ({ colors, dark }) => {
  const { index } = useParams();
  const { tasks } = useAppSelector(state => state.main);

  const [task, setTask] = useState<Task | null>(null);
  const [pressBtn, setPressBtn] = useState(false);

  useEffect(() => {
    if (index) {
      const task = tasks[+index];
      setTask(task);
      setPressBtn(false);
    }
  }, [index]);

  return (
    <Layout
      isFooter={true}
      linkTo={index === '0' ? '/QuestionTask/1' : '/startTask/1'}
    >
      {task ? (
        <div className='h-full w-full flex flex-col items-center'>
          <div className='flex flex-row justify-center items-center self-start'>
            <Player
              colors={colors}
              dark={dark}
              key={'audio1'}
              url={task.audio1}
            />
            <span className='ml-5 uppercase italic'>{task.phrase}</span>
          </div>
          {!pressBtn ? (
            <div className='mt-[10vh]'>
              <QuestionButton
                anim={false}
                dark={dark}
                onClick={() => {
                  setPressBtn(true);
                }}
              />
            </div>
          ) : (
            <>
              <div className='mt-[5vh]  w-[200px] md:w-[250px] lg:w-[300px]'>
                <img alt='pic' width='100%' src={task.image.toString()} />
              </div>
              <div className='mt-[5vh] flex flex-row justify-center items-center self-start'>
                <Player
                  colors={colors}
                  dark={dark}
                  key={'audio2'}
                  url={task.audio2}
                  isRevers={true}
                />
                <span className='ml-5 uppercase italic'>
                  {task.explanation}
                </span>
              </div>
              <div className='mt-[5vh]'>
                <Player
                  colors={colors}
                  dark={dark}
                  key={'audio3'}
                  url={task.audio3}
                  isRevers={true}
                />
              </div>
            </>
          )}
        </div>
      ) : (
        <p>Задача не найдена</p>
      )}
    </Layout>
  );
};

export default QuestionTask;
