import React from 'react';
import {
  ColumnsProps,
  CustomTable,
  ComBlock,
  ComCard,
} from '@td-design/charts';
import { warnData } from '../../../data';

const CustomTableDemo = () => {
  const columns: ColumnsProps[] = [
    { title: '日期', dataIndex: 'datatime', key: 'datatime', width: 16 },
    { title: '报警类型', dataIndex: 'typeDesc', key: 'type', width: 14 },
    { title: '详细内容', dataIndex: 'content', key: 'content', width: 56 },
  ];

  return (
    <ComBlock>
      <ComCard
        title="滚动table"
        headerStyle={{ height: 18 }}
        titleStyle={{ fontSize: 16 }}
      >
        <CustomTable columns={columns} dataSource={warnData} enabledScroll />
      </ComCard>
    </ComBlock>
  );
};

export default CustomTableDemo;
