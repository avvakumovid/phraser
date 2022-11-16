import React, { FC } from 'react';
import { IColors } from '../../../../types/types';
import Player from '../../Player/Player';
import styles from './Item.module.scss';

interface ItemProps {
  handleDragging: (dragging: boolean) => void;
  id: number;
  hide: boolean;
  src: string;
  audio: (id: string) => any;
  colors: IColors;
  dark: boolean;
}

const Item: FC<ItemProps> = ({
  handleDragging,
  id,
  hide,
  audio,
  src,
  colors,
  dark,
}) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', `${id}`);
    handleDragging(true);
    // e.currentTarget.style.opacity = '0';
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    handleDragging(false);
    // e.currentTarget.style.opacity = '1';
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
      <img alt='pic' src={src} />
      <Player colors={colors} dark={dark} url={audio} />
    </div>
  );
};

export default Item;
