import React, { useState, FC, useEffect } from 'react';
import Layout from '../layout/Layout';
//@ts-ignore
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import styles from './DragAndDrop.module.scss';
import Player, { useAudio } from '../common/Player/Player';
import { IColors, Task } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTasks } from '../../store/slice/mainSlice';
import SuccessOrMistake from './../common/SuccessOrMistake/SuccessOrMistake';

export interface DragAndDropTask extends Task {
  success: boolean;
}

interface DragAndDropProps {
  colors: IColors;
  dark: boolean;
  tasks: Task[];
}

const DragAndDrop: FC<DragAndDropProps> = ({ colors, dark, tasks }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const success = useAudio(require('../../assets/sounds/success.mp3')).toggle;
  const mistake = useAudio(require('../../assets/sounds/mistake.mp3')).toggle;

  const [enter, setEnter] = useState(false);

  const [show, setShow] = useState(false);
  const [som, setSom] = useState<'success' | 'mistake'>('mistake');
  const [pressed, setPressed] = useState<number[]>([]);
  const [dataList] = useState<DragAndDropTask[]>([
    ...tasks.map(task => ({ ...task, success: false })),
  ]);
  const [shuffledataList, setshuffledataList] = useState<DragAndDropTask[]>(
    shuffle([...tasks.map(task => ({ ...task, success: false }))])
  );

  useEffect(() => {
    if (!shuffledataList.find(s => s.success === false)) {
      dispatch(setTasks());
      setTimeout(() => {
        navigation('/starttask/0');
      }, 400);
    }
  }, [dispatch, navigation, shuffledataList]);

  const onDrop = (e: any) => {
    e.preventDefault();
    if (e.dragData.id === e.dropData.id) {
      setshuffledataList(prev =>
        prev.map(p => {
          if (p.id === e.dragData.id) {
            p.success = true;
          }
          return p;
        })
      );
      setSom('success');
      success();
    } else {
      setSom('mistake');
      mistake();
    }
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 400);
    setEnter(false);
  };

  return (
    <div className='h-full flex flex-col  justify-between'>
      <DropTarget dropData={{ id: tasks[0].id }} targetKey='foo'>
        <div
          className={`${styles.container}`}
          style={{
            backgroundColor: enter
              ? `rgba(${hexToRgb(colors.bottom)}, 0.3`
              : '',
          }}
        >
          <Player
            pulse={!pressed.includes(2)}
            onClick={() => {
              setPressed(prev => [...prev, 2]);
            }}
            colors={colors}
            dark={dark}
            url={tasks[0].audio1}
          />
          <span>{tasks[0].phrase}</span>
        </div>
      </DropTarget>
      <div>
        {shuffledataList.map((task, index) => (
          <DragDropContainer
            targetKey='foo'
            onDrop={onDrop}
            onDragEnd={(e: any) => {
              setEnter(false);
            }}
            onDrag={(e: any) => {
              setEnter(true);
            }}
            dragData={{ id: task.id }}
          >
            <div
              className={`${styles.item} ${index === 0 ? 'mb-10' : ''}`}
              style={{
                visibility: task.success ? 'hidden' : 'visible',
              }}
            >
              <img alt='pic' src={task.image.toString()} />
              <Player
                pulse={!pressed.includes(index)}
                onClick={() => {
                  setPressed(prev => [...prev, index]);
                }}
                colors={colors}
                dark={dark}
                url={task.audio2}
                isRevers={index === 0}
              />
            </div>
          </DragDropContainer>
        ))}
      </div>
      <DropTarget dropData={{ id: tasks[1].id }} targetKey='foo'>
        <div
          style={{
            backgroundColor: enter
              ? `rgba(${hexToRgb(colors.bottom)}, 0.3`
              : '',
          }}
          className={`${styles.container} `}
        >
          <Player
            pulse={!pressed.includes(3)}
            onClick={() => {
              setPressed(prev => [...prev, 3]);
            }}
            colors={colors}
            dark={dark}
            url={tasks[1].audio1}
            isRevers={true}
          />
          <span>{tasks[1].phrase}</span>
        </div>
      </DropTarget>
      {show && (
        <SuccessOrMistake
          show={show}
          colors={colors}
          isSuccess={som === 'success'}
        />
      )}
    </div>
  );
};

export default DragAndDrop;

const shuffle = (array: any[]) => {
  let shuffleArr = [...array];
  shuffleArr.sort(() => Math.random() - 0.5);
  return shuffleArr;
};

const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
      result[3],
      16
    )}`;
  }
  return '';
};
