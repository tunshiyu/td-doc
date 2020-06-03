import React, { useState } from 'react';
import {
  ChartDom,
  createLinePlot,
  createColumnLinePlot,
  TitleLink,
} from '@td-design/charts';
import useSwitchKey from './useSwitchKey';
import { comboData } from '../../data';
import { barData as barData1 } from '../../data';

const EventsDom = () => {
  const { barData, lineData } = comboData;
  const [name, setname] = useState<string>('');
  const [isDefault, switchKey] = useSwitchKey();

  const defaultDom = (
    <ChartDom
      title="折线图"
      getDom={(dom: HTMLElement) => {
        createLinePlot({
          dom,
          data: barData1,
          config: {
            xField: 'date',
            yField: 'value',
            seriesField: 'type',
            padding: [20, 50, 40, 50],
            events: {
              onPointClick: async ev => {
                console.log('onPointClick - 点击Point了', ev);
                setname(ev.data.date + '-' + ev.data.type);
                switchKey('detail');
              },
              onLineClick: async ev => {
                console.log('onLineClick - 点击线了', ev);
              },
              onAxisClick: async ev => {
                console.log('onAxisClick - 点击坐标轴了', ev);
              },
              onLegendMousemove: async ev => {
                console.log('onLegendMousemove - 移入图例了', ev);
              },
              onPlotMousedown: async ev => {
                console.log('onPlotMousedown - 点击图表了', ev);
              },
            },
          },
        });
      }}
    />
  );

  const detailDom = (
    <ChartDom
      getDom={(dom: HTMLElement) => {
        createColumnLinePlot({
          dom,
          data: [barData, lineData],
          config: {
            xField: 'time',
            yField: ['value', 'count'],
          },
        });
      }}
      title={
        <TitleLink
          onClick={() => {
            switchKey('default');
          }}
          title={name}
        />
      }
    />
  );

  return (
    <>
      {isDefault && defaultDom}
      {!isDefault && detailDom}
    </>
  );
};

export default EventsDom;
