import React from 'react';
import { createDonutPlot, ChartPlot } from '@td-design/charts';

const DonutPlot = () => (
  <ChartPlot
    style={{ background: '#ddd' }}
    getDom={(dom: HTMLElement) =>
      createDonutPlot({
        dom,
        data: 73,
        config: {
          isSingle: true,
          titleName: '图例1',
        },
      })
    }
  />
);

export default DonutPlot;
