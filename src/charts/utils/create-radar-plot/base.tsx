import React from 'react';
import { ChartDom, createRadarPlot } from '@td-design/charts';
import { radarData } from '../../../data';

const BaseRadarDemo = () => (
  <ChartDom
    title="雷达图"
    style={{ width: '440px', height: '290px' }}
    getDom={(dom: HTMLElement) =>
      createRadarPlot({
        dom,
        data: radarData,
        config: {
          angleField: 'item',
          radiusField: 'score',
          seriesField: 'user',
        },
      })
    }
  />
);

export default BaseRadarDemo;
