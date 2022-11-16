import React, { FC } from 'react';
import { IColors } from '../../types/types';
import Layout from './../../components/layout/Layout';
import DnD from './../../components/common/DnD/DnD';
import { useAppSelector } from '../../hooks/useAppSelector';
import BeatifulDnd from '../../components/BeatifulDnd/BeatifulDnd';

interface FinalTaskProps {
  colors: IColors;
  dark: boolean;
}

const FinalTask: FC<FinalTaskProps> = ({ colors, dark }) => {
  const { tasks } = useAppSelector(state => state.main);

  return (
    <Layout>
      <BeatifulDnd colors={colors} dark={dark} tasks={tasks} />
      {/* <DnD colors={colors} dark={dark} tasks={tasks} /> */}
    </Layout>
  );
};

export default FinalTask;
