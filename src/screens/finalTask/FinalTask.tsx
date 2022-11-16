import React, { FC } from 'react';
import { IColors } from '../../types/types';
import Layout from './../../components/layout/Layout';
import DnD from './../../components/common/DnD/DnD';
import { useAppSelector } from '../../hooks/useAppSelector';


interface FinalTaskProps {
  colors: IColors;
  dark: boolean;
}

const FinalTask: FC<FinalTaskProps> = ({ colors, dark }) => {
  const { tasks } = useAppSelector(state => state.main);

  return (
    <Layout>
      <DnD colors={colors} dark={dark} tasks={tasks} />
    </Layout>
  );
};

export default FinalTask;
