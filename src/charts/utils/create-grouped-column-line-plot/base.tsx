import React from 'react';
import { ChartDom, createGroupedColumnLinePlot } from '@td-design/charts';
import { groupedComboData } from '../../../data';

const GroupedColumnLineDemo = () => {
  const { barData, lineData } = groupedComboData;
  return (
    <ChartDom
      title="分组柱状图+折线图"
      getDom={(dom: HTMLElement) =>
        createGroupedColumnLinePlot({
          dom,
          data: [barData, lineData],
          config: {
            xField: 'time',
            yField: ['value', 'count'],
            columnGroupField: 'type',
          },
        })
      }
    />
  );
};

export default GroupedColumnLineDemo;
