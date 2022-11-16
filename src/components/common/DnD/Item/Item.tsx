import React, { FC } from 'react';
import styles from './Item.module.scss';

interface ItemProps {
  handleDragging: (dragging: boolean) => void;
  id: number;
  hide: boolean;
}

const Item: FC<ItemProps> = ({ handleDragging, id, hide }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', `${id}`);
    console.log('start');
    handleDragging(true);
  };

  const handleDragEnd = () => {
    console.log('end');
    handleDragging(false);
  };

  return (
    <div
      style={{
        visibility: hide ? 'hidden' : 'visible',
      }}
      draggable
      className={styles.item}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {id}
    </div>
  );
};

export default Item;
