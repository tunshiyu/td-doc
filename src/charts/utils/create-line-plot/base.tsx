import React from 'react';
import { ChartDom, createLinePlot } from '@td-design/charts';
import { barData } from '../../../data';

const LinePlotDemo = () => (
  <ChartDom
    title="普通折线图示例"
    getDom={(dom: HTMLElement) =>
      createLinePlot({
        dom,
        data: barData,
        config: {
          xField: 'date',
          yField: 'value',
          seriesField: 'type',
        },
      })
    }
  />
);

export default LinePlotDemo;
