import React from 'react';
import { ChartDom, createDonutPlot } from '@td-design/charts';
import { pieData } from '../../data';
import {
  selectedItemProps,
  DonutLayer,
} from '@td-design/charts/lib/utils/create-donut-plot';
import { StateManager, DataItem } from '@td-design/charts/lib/config';

// 自定义环形颜色
const colorArr = [
  '#02D1FF',
  '#FFBB04',
  '#F35C12',
  '#A72FEB',
  '#49D512',
  '#0054FF',
  '#009DFF',
];

const BaseDonutDemo = () => {
  const stateManager = new StateManager();

  return (
    <ChartDom
      title="高亮环形图"
      getDom={(dom: HTMLElement) => {
        const donutPlot = createDonutPlot({
          dom,
          data: pieData,
          config: {
            angleField: 'value',
            colorField: 'type',
            color: colorArr,
            highlightEnabled: false,
          },
        });
        // 启用状态管理
        donutPlot.bindStateManager(stateManager, {
          setState: [
            {
              event: 'ring:click',
              state: (e: any) => {
                const origin = e.target.get('origin').data;
                // type 为数据中的分类依据字段名
                const state = { name: 'type', exp: origin.type };
                return state;
              },
            },
          ],
          onStateChange: [
            {
              name: 'type',
              callback: (d: selectedItemProps, plot: DonutLayer) => {
                const dataIndex = pieData.findIndex(
                  item => item.type === d.exp,
                );
                plot.setSelected(d, {
                  stroke: colorArr[dataIndex],
                  lineWidth: 10,
                  fillOpacity: 1,
                });
                plot.setDefault(
                  (origin: DataItem) => {
                    return origin[d.name] !== d.exp;
                  },
                  {
                    stroke: '#122749',
                    // 如果是 bordered 为 false 则为0
                    lineWidth: 6,
                  },
                );
              },
            },
          ],
        });
      }}
    />
  );
};

export default BaseDonutDemo;
