import React, { useState, FC, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { IColors, Task } from '../../types/types';
import Player from '../common/Player/Player';
import { useDispatch } from 'react-redux';
import { setTasks } from '../../store/slice/mainSlice';
import { useNavigate } from 'react-router-dom';
import SuccessOrMistake from '../common/SuccessOrMistake/SuccessOrMistake';
import { useAudio } from './../common/Player/Player';

interface BeatifulDndProps {
  tasks: Task[];
  colors: IColors;
  dark: boolean;
}

export interface DnDTask extends Task {
  success: boolean;
}

const BeatifulDnd: FC<BeatifulDndProps> = ({ tasks, colors, dark }) => {
  const [shuffledataList, setshuffledataList] = useState<DnDTask[]>(
    shuffle([...tasks.map(task => ({ ...task, success: false }))])
  );
  const [show, setShow] = useState(false);
  const [som, setSom] = useState<'success' | 'mistake'>('mistake');
  const navigation = useNavigate();

  const success = useAudio(require('../../assets/sounds/success.mp3')).toggle;
  const mistake = useAudio(require('../../assets/sounds/mistake.mp3')).toggle;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!shuffledataList.find(s => s.success === false)) {
      dispatch(setTasks());
      setTimeout(() => {
        navigation('/starttask/1');
      }, 400);
    }
  }, [dispatch, navigation, shuffledataList]);

  return (
    <div className='w-full h-full flex flex-col justify-between items-center overflow-hidden'>
      <DragDropContext
        onDragEnd={r => {
          if (!r.destination) return;

          if (r.destination.droppableId == r.draggableId) {
            const i = shuffledataList.map(s => {
              if (s.id.toString() === r.destination?.droppableId.toString()) {
                return { ...s, success: true };
              }
              return s;
            });
            success();
            setshuffledataList(i);
            setSom('success');
            setShow(true);
            setTimeout(() => {
              setShow(false);
            }, 400);
          } else {
            mistake();
            setSom('mistake');
            setShow(true);
            setTimeout(() => {
              setShow(false);
            }, 400);
          }
        }}
      >
        <Droppable droppableId={tasks[0].id.toString()}>
          {provide => (
            <div
              className='flex flex-row justify-start items-center  w-full h-[11vh]'
              {...provide.droppableProps}
              ref={provide.innerRef}
            >
              <Player colors={colors} dark={dark} url={tasks[0].audio1} />
              <span className='uppercase italic ml-5 min-w-max'>
                {tasks[0].phrase}
              </span>
              {provide.placeholder}
            </div>
          )}
        </Droppable>
        <div className='w-full max-h-full flex flex-col  '>
          {shuffledataList.map((task, index) => (
            <Droppable droppableId={'droppable' + index}>
              {provide => (
                <div
                  className={`'w-full  max-h-[30vh] my-4 ' ${
                    task.success ? ' invisible' : ' visible'
                  }`}
                  {...provide.droppableProps}
                  ref={provide.innerRef}
                >
                  <Draggable
                    key={task.id}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {provided => (
                      <div
                        className='w-full flex flex-row justify-start items-end  px-4 '
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <img
                          src={task.image.toString()}
                          alt='pic'
                          className='w-[200px] md:w-[220px] lg:w-[250px] mr-5'
                        />
                        <Player colors={colors} dark={dark} url={task.audio2} />
                      </div>
                    )}
                  </Draggable>
                  {provide.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
        <Droppable droppableId={tasks[1].id.toString()}>
          {provide => (
            <div
              className='flex flex-row justify-start items-center w-full h-[11vh] '
              {...provide.droppableProps}
              ref={provide.innerRef}
            >
              <Player colors={colors} dark={dark} url={tasks[1].audio1} />
              <span className='uppercase italic ml-5 min-w-max'>
                {tasks[1].phrase}
              </span>
              {provide.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
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

export default BeatifulDnd;

const shuffle = (array: any[]) => {
  let shuffleArr = [...array];
  shuffleArr.sort(() => Math.random() - 0.5);
  return shuffleArr;
};
