---
group:
  title: 组件DOM
---

## ChartDom

是 `ComBlock` , `ComCard` , `ChartPlot` 的组合体，一般需求都可以直接用这个 Dom 完成。

### 接受参数

| 属性    | 说明                     | 类型                              | 必填  | 默认值 |
| ------- | ------------------------ | --------------------------------- | ----- | ------ |
| getDom  | 接受生成图表的方法和配置 | (dom: HTMLElement) => void        | true  |
| title   | Card 标题                | string                            | true  |        |
| onClick | 容器点击事件             | (event: React.MouseEvent) => void | false |        |

### Demo

```tsx
import React from 'react';
import { ChartDom, createLinePlot } from '@td-design/charts';
import { barData } from '../../../data';

const ChartDomDemo = () => (
  <ChartDom
    title="普通折线图示例"
    getDom={dom =>
      createLinePlot({
        dom,
        data: barData,
        config: { xField: 'date', yField: 'value', seriesField: 'type' },
      })
    }
  />
);

export default ChartDomDemo;
```

以上为使用 `ChartDom` 生成一个普通折线图的使用方法，`createLinePlot` 为生成折线图的方法，后面会介绍。
