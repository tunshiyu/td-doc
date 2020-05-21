import React from 'react';
import { ComCard } from '@td-design/charts';

const ExtraDemo = () => (
  <ComCard title="主标题" extra={<div>右侧组件</div>}>
    <span>我是内容</span>
  </ComCard>
);

export default ExtraDemo;
