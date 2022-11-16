import React, { useState, useEffect, FC } from 'react';
import { IColors } from '../../../types/types';
import PlayBtn from '../Buttons/PlayBtn/PlayBtn';

const useAudio = (url: any) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);
  useEffect(() => {
    console.log(playing);
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', event => {
      console.log(event);
      setPlaying(false);
    });
    // audio.addEventListener('');
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return { playing, toggle };
};

interface PlayerProps {
  url: any;
  colors: IColors;
  dark: boolean;
}

const Player: FC<PlayerProps> = ({ url, colors, dark }) => {
  const { playing, toggle } = useAudio(url);

  return (
    <div>
      <button
        onClick={() => {
          toggle();
        }}
      >
        <PlayBtn colors={colors} dark={dark} pause={playing} />
      </button>
    </div>
  );
};

export default Player;
