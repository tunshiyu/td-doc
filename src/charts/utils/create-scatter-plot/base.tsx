import React from 'react';
import { ChartDom, createScatterPlot } from '@td-design/charts';
import { scatterData } from '../../../data';

const ScatterPlotDemo = () => (
  <ChartDom
    title="单象限散点图示例"
    style={{ width: '500px', height: '235px' }}
    getDom={(dom: HTMLElement) =>
      createScatterPlot({
        dom,
        data: scatterData,
        config: {
          xField: 'date',
          yField: 'type',
          sizeField: 'value',
          yNameFormatter: data => `条件${data}`,
        },
      })
    }
  />
);

export default ScatterPlotDemo;
