import React, { FC } from 'react';

interface ColumnProps {
  column: any;
  tasks: any;
}

const Column: FC<ColumnProps> = ({ column, tasks }) => {
  return <div>{column.title}</div>;
};

export default Column;
