import React, { FC, useState } from 'react';
import styles from './Container.module.scss';
import { DnDTask } from './../DnD';
import Player, { useAudio } from '../../Player/Player';
import { IColors } from '../../../../types/types';

interface ContainerProps {
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: number) => void;
  data: DnDTask;
  colors: IColors;
  dark: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setSom: React.Dispatch<React.SetStateAction<'success' | 'mistake'>>;
  isRevers?: boolean;
  dataTransfet: number;
}

const Container: FC<ContainerProps> = ({
  handleDragging,
  isDragging,
  handleUpdateList,
  data,
  colors,
  dark,
  setShow,
  setSom,
  isRevers = false,
  dataTransfet,
}) => {
  const success = useAudio(
    require('../../../../assets/sounds/success.mp3')
  ).toggle;
  const mistake = useAudio(
    require('../../../../assets/sounds/mistake.mp3')
  ).toggle;

  const [pressed, setPressed] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('end');
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('drop');
    e.preventDefault();
    setIsOn(false);
    const id = dataTransfet;
    if (id === data.id) {
      handleUpdateList(id);
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
    handleDragging(false);
  };
  let counter = 0;
  return (
    <div
      style={{
        backgroundColor: isOn ? `rgba(${hexToRgb(colors.bottom)}, 0.3` : '',
      }}
      className={`${styles.container} ${isDragging ?? styles.isDraging} `}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnter={e => {
        console.log('enter');
        e.preventDefault();
        counter++;
        setIsOn(true);
      }}
      onDragLeave={e => {
        console.log('leave');
        if (counter === 0) {
          setIsOn(false);
        }
        counter--;
      }}
    >
      <Player
        pulse={!pressed}
        onClick={() => {
          setPressed(true);
        }}
        colors={colors}
        dark={dark}
        url={data.audio1}
        isRevers={isRevers}
      />
      <span>{data.phrase}</span>
    </div>
  );
};

export default Container;

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
