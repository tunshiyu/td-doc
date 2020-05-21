import React from 'react';
import { ChartDom, createDonutPlot } from '@td-design/charts';
import { pieData } from '../../../data';

const SingleDonutDemo = () => (
  <ChartDom
    title="单例环形图"
    getDom={dom =>
      createDonutPlot({
        dom,
        data: 40,
        config: {
          angleField: 'value',
          colorField: 'type',
          isSingle: true,
        },
      })
    }
  />
);

export default SingleDonutDemo;
