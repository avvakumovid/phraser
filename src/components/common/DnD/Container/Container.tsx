import React, { FC } from 'react';
import styles from './Container.module.scss';
import { IData } from './../../../../types/types';

interface ContainerProps {
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: number) => void;
  data: IData;
}

const Container: FC<ContainerProps> = ({
  handleDragging,
  isDragging,
  handleUpdateList,
  data,
}) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = '';
    const id = +e.dataTransfer.getData('text');
    if (id === data.taskId) {
      handleUpdateList(id);
    }
    handleDragging(false);
  };
  return (
    <div
      className={`${styles.container} ${isDragging ?? styles.isDraging}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnter={e => {
        e.currentTarget.style.backgroundColor = 'rgba(21,22,188, 0.2)';
      }}
      onDragLeave={e => {
        e.currentTarget.style.backgroundColor = '';
      }}
    >
      {data.taskName}
      {data.accept.toString()}
    </div>
  );
};

export default Container;
