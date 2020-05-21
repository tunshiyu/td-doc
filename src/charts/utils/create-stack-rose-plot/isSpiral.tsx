import React from 'react';
import { ChartDom, createStackRosePlot } from '@td-design/charts';
import { roseData } from '../../../data';

const BaseStackDemo = () => (
  <ChartDom
    title="堆叠玫瑰图"
    style={{ width: '440px', height: '290px' }}
    getDom={dom =>
      createStackRosePlot({
        dom,
        data: roseData,
        config: {
          radiusField: 'value',
          categoryField: 'category',
          stackField: 'type',
          isSpiral: true,
        },
      })
    }
  />
);

export default BaseStackDemo;
