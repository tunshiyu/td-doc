import React from 'react';
import { ChartDom, createScatterPlot } from '@td-design/charts';
import { scatterData } from '../../../data';

const ScatterPlotDemo = () => (
  <ChartDom
    title="单象限散点图示例"
    getDom={dom =>
      createScatterPlot({
        dom,
        data: scatterData,
        config: {
          xField: 'date',
          yField: 'type',
          sizeField: 'value',
          yPrefixName: '条件',
        },
      })
    }
  />
);

export default ScatterPlotDemo;
