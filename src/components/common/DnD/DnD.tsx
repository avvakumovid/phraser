import React, { FC, useState } from 'react';
import Container from './Container/Container';
import Item from './Item/Item';
import { IData } from './../../../types/types';

const data: IData[] = [
  {
    taskId: 0,
    taskName: 'asd',
    accept: false,
  },
  {
    taskId: 1,
    taskName: '123',
    accept: false,
  },
];

const DnD = () => {
  const [isDragging, setIsDragging] = useState(false);
  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  const [dataList, setDataList] = useState<IData[]>(data);

  const handleUpdateList = (id: number) => {
    setDataList(prev =>
      prev.map(p => {
        if (p.taskId === id) {
          p.accept = true;
        }
        return p;
      })
    );
  };
  return (
    <div className='h-full w-full bg-red-500 flex flex-col justify-between'>
      <Container
        data={dataList[0]}
        isDragging={isDragging}
        handleDragging={handleDragging}
        handleUpdateList={handleUpdateList}
      />

      {dataList.map(d => (
        <Item handleDragging={handleDragging} id={d.taskId} hide={d.accept} />
      ))}

      <Container
        data={dataList[1]}
        isDragging={isDragging}
        handleDragging={handleDragging}
        handleUpdateList={handleUpdateList}
      />
    </div>
  );
};

export default DnD;
