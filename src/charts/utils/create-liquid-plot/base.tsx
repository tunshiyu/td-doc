import React from 'react';
import { ChartDom, createLiquidPlot } from '@td-design/charts';

const BaseLiquidDemo = () => (
  <ChartDom
    title="注水图示例"
    style={{ width: '320px', height: '290px' }}
    getDom={dom =>
      createLiquidPlot({
        dom,
        data: 50,
      })
    }
  />
);

export default BaseLiquidDemo;
