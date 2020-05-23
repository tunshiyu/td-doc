import React from 'react';
import { ChartDom, createCustomBarPlot } from '@td-design/charts';
import { pieData } from '../../../data';

const CustomBarPlotDemo = () => (
  <ChartDom
    title="基础条形图示例"
    style={{ width: '440px', height: '290px' }}
    getDom={(dom: HTMLElement) =>
      createCustomBarPlot({
        dom,
        data: pieData,
        config: {
          xField: 'type',
          yField: 'value',
        },
      })
    }
  />
);

export default CustomBarPlotDemo;
