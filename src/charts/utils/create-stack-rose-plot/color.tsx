import React from 'react';
import { ChartDom, createStackRosePlot } from '@td-design/charts';
import { roseData } from '../../../data';

const BaseStackDemo = () => (
  <ChartDom
    title="堆叠玫瑰图"
    style={{ width: '440px', height: '290px' }}
    getDom={(dom: HTMLElement) =>
      createStackRosePlot({
        dom,
        data: roseData,
        config: {
          radiusField: 'value',
          categoryField: 'category',
          stackField: 'type',
          color: ['#ff0000', '#00ff00'],
        },
      })
    }
  />
);

export default BaseStackDemo;
