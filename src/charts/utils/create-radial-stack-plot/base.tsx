import React from 'react';
import { ChartDom, createRadialStackPlot } from '@td-design/charts';
import { radialStackData } from '../../../data';

const BaseRadialStackDemo = () => (
  <ChartDom
    title="极坐标下的柱状图"
    style={{ width: '320px', height: '290px' }}
    getDom={(dom: HTMLElement) =>
      createRadialStackPlot({
        dom,
        data: radialStackData,
        config: {
          colorField: 'type',
          angleField: 'value',
        },
      })
    }
  />
);

export default BaseRadialStackDemo;
