import React from 'react';
import { ChartDom, createStackColumnPlot } from '@td-design/charts';
import { barData } from '../../../data';

const BaseStackColumnDemo = () => (
  <ChartDom
    title="堆叠柱状图示例"
    getDom={dom =>
      createStackColumnPlot({
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

export default BaseStackColumnDemo;
