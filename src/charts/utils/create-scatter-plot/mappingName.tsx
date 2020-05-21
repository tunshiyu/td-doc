import React from 'react';
import { ChartDom, createScatterPlot } from '@td-design/charts';
import { scatterData } from '../../../data';

// y轴映射关系
const MAPPING_NAME = {
  1: '美国',
  2: '中国',
  3: '日本',
};

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
          mappingName: MAPPING_NAME,
        },
      })
    }
  />
);

export default ScatterPlotDemo;
