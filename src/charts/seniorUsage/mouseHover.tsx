import React from 'react';
import { ChartDom, createDonutPlot } from '@td-design/charts';
import { pieData } from '../../data';

const BaseDonutDemo = () => (
  <ChartDom
    title="环形图"
    getDom={(dom: HTMLElement) =>
      createDonutPlot({
        dom,
        data: pieData,
        config: {
          angleField: 'value',
          colorField: 'type',
        },
      })
    }
  />
);

export default BaseDonutDemo;
