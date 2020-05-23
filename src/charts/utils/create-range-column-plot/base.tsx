import React from 'react';
import { ChartDom, createRangeColumnPlot } from '@td-design/charts';
import { rangeData } from '../../../data';

const BaseRangeColumnDemo = () => (
  <ChartDom
    title="区间柱状图示例"
    getDom={(dom: HTMLElement) =>
      createRangeColumnPlot({
        dom,
        data: rangeData,
        config: {
          xField: 'type',
          yField: 'values',
        },
      })
    }
  />
);

export default BaseRangeColumnDemo;
