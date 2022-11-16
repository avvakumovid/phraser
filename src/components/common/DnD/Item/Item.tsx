import React, { FC, useState } from 'react';
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
  isRevers: boolean;
}

const Item: FC<ItemProps> = ({
  handleDragging,
  id,
  hide,
  audio,
  src,
  colors,
  dark,
  isRevers,
}) => {
  const [pressed, setPressed] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', `${id}`);
    handleDragging(true);
    e.currentTarget.style.opacity = '0';
  };
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    // e.dataTransfer.setData('text', `${id}`);
    console.log(e);
    handleDragging(true);
    // e.
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    handleDragging(false);
    e.currentTarget.style.opacity = '1';
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    handleDragging(false);
    e.currentTarget.style.opacity = '1';
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
      onMouseDown={e => {}}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img alt='pic' src={src} />
      <Player
        pulse={!pressed}
        onClick={() => {
          setPressed(true);
        }}
        colors={colors}
        dark={dark}
        url={audio}
        isRevers={isRevers}
      />
    </div>
  );
};

export default Item;
