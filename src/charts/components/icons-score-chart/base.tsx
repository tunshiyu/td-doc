import React from 'react';
import { ComBlock, IconsScoreChart, ComCard } from '@td-design/charts';
import { standardsData, scoreData } from '../../../data';

const IconsScoreChartDemo = () => (
  <ComBlock>
    <ComCard title="评分" headerStyle={{ height: 16 }}>
      <IconsScoreChart standards={standardsData} scores={scoreData} size={16} />
    </ComCard>
  </ComBlock>
);

export default IconsScoreChartDemo;
