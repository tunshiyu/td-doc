import React from 'react';
import { ChartDom, createDonutRosePlot } from '@td-design/charts';
import { pieData } from '../../../data';

const BaseDonutRoseDemo = () => (
  <ChartDom
    title="玫瑰图"
    style={{ width: '440px', height: '290px' }}
    getDom={dom =>
      createDonutRosePlot({
        dom,
        data: pieData,
        config: {
          layout: 'half',
          colorField: 'type',
          radiusField: 'value',
        },
      })
    }
  />
);

export default BaseDonutRoseDemo;
