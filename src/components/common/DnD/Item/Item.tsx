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
  setDataTransfer: React.Dispatch<React.SetStateAction<number>>;
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
  setDataTransfer,
}) => {
  const [pressed, setPressed] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    // e.dataTransfer.setData('text', `${id}`);
    setDataTransfer(id);
    handleDragging(true);
    e.currentTarget.style.opacity = '0';
  };
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setDataTransfer(id);
    handleDragging(true);
    e.currentTarget.style.opacity = '0.2';
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
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={(e: React.TouchEvent) => {
        // console.log);
        e.target.addEventListener('ended', f => {
          console.log(f);
        });
      }}
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
