import React from 'react';
import { ChartDom, createScatterPlot } from '@td-design/charts';
import { scatterData } from '../../../data';

// y轴映射关系
const MAPPING_NAME = {
  1: '明',
  2: '红',
  3: '王',
};

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
          mappingName: MAPPING_NAME,
          yPrefixName: '小',
          ySuffixName: '(元)',
        },
      })
    }
  />
);

export default ScatterPlotDemo;
