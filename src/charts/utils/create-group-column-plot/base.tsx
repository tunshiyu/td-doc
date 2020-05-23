import React from 'react';
import { ChartDom, createGroupColumnPlot } from '@td-design/charts';
import { barData } from '../../../data';

const GroupColumnPlotDemo = () => (
  <ChartDom
    title="分组柱状图示例"
    getDom={(dom: HTMLElement) =>
      createGroupColumnPlot({
        dom,
        data: barData,
        config: {
          xField: 'date',
          yField: 'value',
          groupField: 'type',
        },
      })
    }
  />
);

export default GroupColumnPlotDemo;
