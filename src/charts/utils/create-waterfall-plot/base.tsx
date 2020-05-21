import React from 'react';
import { ChartDom, createWaterfallPlot } from '@td-design/charts';
import { barData } from '../../../data';

const BaseWaterfallDemo = () => (
  <ChartDom
    title="瀑布图"
    getDom={dom =>
      createWaterfallPlot({
        dom,
        data: barData,
        config: {
          xField: 'date',
          yField: 'value',
        },
      })
    }
  />
);

export default BaseWaterfallDemo;
