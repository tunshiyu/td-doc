import React from 'react';
import { ChartDom, createStackAreaPlot } from '@td-design/charts';
import { barData } from '../../../data';

const StackAreaPlotDemo = () => (
  <ChartDom
    title="面积图示例"
    getDom={dom =>
      createStackAreaPlot({
        dom,
        data: barData,
        config: {
          xField: 'date',
          yField: 'value',
          stackField: 'type',
        },
      })
    }
  />
);

export default StackAreaPlotDemo;
