import React from 'react';
import { ChartDom, createLinePlot } from '@td-design/charts';
import { barData } from '../../../data';

const ChartDomDemo = () => (
  <ChartDom
    title="普通折线图示例"
    getDom={dom =>
      createLinePlot({
        dom,
        data: barData,
        config: { xField: 'date', yField: 'value', seriesField: 'type' },
      })
    }
  />
);

export default ChartDomDemo;
