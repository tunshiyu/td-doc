import React from 'react';
import { ChartDom, createColumnLinePlot } from '@td-design/charts';
import { comboData } from '../../../data';

const ColumnLineDemo = () => {
  const { barData, lineData } = comboData;
  return (
    <ChartDom
      title="柱状图+折线图"
      getDom={(dom: HTMLElement) =>
        createColumnLinePlot({
          dom,
          data: [barData, lineData],
          config: {
            xField: 'time',
            yField: ['value', 'count'],
          },
        })
      }
    />
  );
};

export default ColumnLineDemo;
