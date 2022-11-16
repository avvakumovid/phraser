import React, { useState, useEffect, FC } from 'react';
import { IColors } from '../../../types/types';
import PlayBtn from '../Buttons/PlayBtn/PlayBtn';

export const useAudio = (url: any) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio(url));
  }, [url]);
  const toggle = () => setPlaying(!playing);
  useEffect(() => {
    if (audio) {
      playing ? audio.play() : audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener('ended', event => {
        setPlaying(false);
      });
    }
    // audio.addEventListener('');
    return () => {
      if (audio) {
        audio.removeEventListener('ended', () => setPlaying(false));
      }
    };
  }, [audio]);

  return { playing, toggle };
};

interface PlayerProps {
  url: any;
  colors: IColors;
  dark: boolean;
  isRevers?: boolean;
}

const Player: FC<PlayerProps> = ({ url, colors, dark, isRevers = false }) => {
  const { playing, toggle } = useAudio(url);

  return (
    <div>
      <button
        className='flex items-center justify-center'
        onClick={() => {
          toggle();
        }}
      >
        <PlayBtn
          colors={colors}
          dark={dark}
          pause={playing}
          isRevers={isRevers}
        />
      </button>
    </div>
  );
};

export default Player;
