import React, { FC, useState, useEffect } from 'react';
import Container from './Container/Container';
import Item from './Item/Item';
import { IColors, Task } from './../../../types/types';
import SuccessOrMistake from '../SuccessOrMistake/SuccessOrMistake';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTasks } from '../../../store/slice/mainSlice';
export interface DnDTask extends Task {
  success: boolean;
}

interface DNDProps {
  tasks: Task[];
  colors: IColors;
  dark: boolean;
}

const DnD: FC<DNDProps> = ({ tasks, colors, dark }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [isDragging, setIsDragging] = useState(false);
  const handleDragging = (dragging: boolean) => setIsDragging(dragging);
  const [show, setShow] = useState(false);
  const [som, setSom] = useState<'success' | 'mistake'>('mistake');
  const [dataList] = useState<DnDTask[]>([
    ...tasks.map(task => ({ ...task, success: false })),
  ]);
  const [shuffledataList, setshuffledataList] = useState<DnDTask[]>(
    shuffle([...tasks.map(task => ({ ...task, success: false }))])
  );
  const [dataTransfet, setDataTransfer] = useState(-1);
  useEffect(() => {
    if (!shuffledataList.find(s => s.success === false)) {
      dispatch(setTasks());
      setTimeout(() => {
        navigation('/starttask/0');
      }, 400);
    }
  }, [dispatch, navigation, shuffledataList]);

  const handleUpdateList = (id: number) => {
    setshuffledataList(prev =>
      prev.map(p => {
        if (p.id === id) {
          p.success = true;
        }
        return p;
      })
    );
  };
  return (
    <div className='h-full w-full  flex flex-col justify-between'>
      <Container
        dataTransfet={dataTransfet}
        setShow={setShow}
        setSom={setSom}
        colors={colors}
        dark={dark}
        key='Container-1'
        data={dataList[0]}
        isDragging={isDragging}
        handleDragging={handleDragging}
        handleUpdateList={handleUpdateList}
      />

      {shuffledataList.map((d, i) => (
        <Item
          setDataTransfer={setDataTransfer}
          isRevers={i === 0}
          colors={colors}
          dark={dark}
          key={d.id}
          handleDragging={handleDragging}
          id={d.id}
          audio={d.audio2}
          src={d.image.toString()}
          hide={d.success}
        />
      ))}

      <Container
        dataTransfet={dataTransfet}
        setShow={setShow}
        setSom={setSom}
        colors={colors}
        dark={dark}
        key='Container-2'
        data={dataList[1]}
        isDragging={isDragging}
        handleDragging={handleDragging}
        handleUpdateList={handleUpdateList}
        isRevers={true}
      />
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

export default DnD;

const shuffle = (array: any[]) => {
  let shuffleArr = [...array];
  shuffleArr.sort(() => Math.random() - 0.5);
  return shuffleArr;
};
