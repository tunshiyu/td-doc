import React from 'react';
import { ChartDom, createCustomBarPlot } from '@td-design/charts';
import { pieData } from '../../../data';

const CustomBarPlotDemo = () => (
  <ChartDom
    title="基础条形图示例"
    getDom={dom =>
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
