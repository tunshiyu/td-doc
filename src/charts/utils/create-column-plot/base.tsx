import React from 'react';
import { ChartDom, createColumnPlot } from '@td-design/charts';
import { barData } from '../../../data';

const ColumnPlotDemo = () => (
  <ChartDom
    title="普通柱状图"
    getDom={(dom: HTMLElement) =>
      createColumnPlot({
        dom,
        data: barData,
        config: {
          xField: 'date',
          yField: 'value',
        },
      })
    }
  />
);

export default ColumnPlotDemo;
