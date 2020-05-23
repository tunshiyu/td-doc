import React from 'react';
import { ChartDom, createDonutPlot } from '@td-design/charts';
import { pieData } from '../../../data';

const highlightDisabledDemo = () => (
  <ChartDom
    title="环形图"
    getDom={(dom: HTMLElement) =>
      createDonutPlot({
        dom,
        data: pieData,
        config: {
          angleField: 'value',
          colorField: 'type',
          highlightEnabled: false,
        },
      })
    }
  />
);

export default highlightDisabledDemo;
