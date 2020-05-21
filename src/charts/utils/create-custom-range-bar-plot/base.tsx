import React from 'react';
import { ChartDom, createCustomRangeBarPlot } from '@td-design/charts';
import { rangeData } from '../../../data';

const CustomBarPlotDemo = () => (
  <ChartDom
    title="区间条形图示例"
    style={{ width: '560px', height: '242px' }}
    getDom={dom =>
      createCustomRangeBarPlot({
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

export default CustomBarPlotDemo;
