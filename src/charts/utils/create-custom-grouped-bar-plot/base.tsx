import React from 'react';
import { ChartDom, createCustomGroupedBarPlot } from '@td-design/charts';
import { groupedBarData } from '../../../data';

const BaseCustomGroupedBarDemo = () => (
  <ChartDom
    title="分组条形图示例"
    style={{ width: '560px', height: '242px' }}
    getDom={(dom: HTMLElement) =>
      createCustomGroupedBarPlot({
        dom,
        data: groupedBarData,
        config: {
          xField: 'country',
          yField: 'value',
          groupField: 'type',
        },
      })
    }
  />
);

export default BaseCustomGroupedBarDemo;
