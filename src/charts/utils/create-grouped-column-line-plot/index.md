## 分组柱线混合图表

### 图表库

基于 G2Plot 实现,其他配置参考 G2Plot 的 <a href="https://g2plot.antv.vision/zh/examples/combo/groupedColumn-line/API">分组柱线混合图</a>。

### 默认配置

```js
const config = {
  // 见基础配置说明-公共配置
  ...baseComboConfig,
  xField: 'time',
  yField: ['value', 'count'],
  columnGroupField: 'type',
  columnConfig: {
    // 柱子宽度
    columnSize: 24,
    // 柱子颜色
    color: ['#10B1FA', '#42CF35'],
  },
  yAxis: {
    leftConfig: baseComboYAxis,
    rightConfig: baseComboYAxis,
  },
  ...config,
};
```

### 组件库内部配置

| 细分配置     | 功能描述          | 类型    | 是否必选 | 默认值 |
| ------------ | ----------------- | ------- | -------- | ------ |
| isSingleAxis | 是否单轴,默认双轴 | boolean | false    | false  |

isSingleAxis 为 true (单轴)时的配置

```json
{
  "yAxis": {
    // 见基础配置说明-公共配置
    ...baseComboYAxis,
    // 计算得数据的最大值
    max,
    "min": 0,
    "rightConfig": {
      "visible": false
    }
  }
}
```

### 标准配置

TODO: 等官网完善

### Demo

- 基本用法

<code src="./base.tsx">

- 单轴

<code src="./isSingleAxis.tsx">
