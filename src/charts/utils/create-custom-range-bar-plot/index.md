## 区间条形图

### 图表库

基于 G2 实现，不支持其他配置，图表组件库中做了语法糖处理，函数使用方法与其他 G2Plot 类 create 方法一致，<a href="https://g2.antv.vision/zh/examples/bar/basic#ranged">官网示例</a>。

### 默认配置

```js
const config = {
  // 见基础配置说明-公共配置
  ...baseConfig,
  xAxis: {
    line: { visible: false, style: { lineWidth: 0 } },
    tickLine: { visible: false, style: { lineWidth: 0 } },
    label: {
      style: textStyle,
    },
    grid: {
      visible: false,
    },
  },
  yAxis: {
    line: { visible: false, style: { lineWidth: 0 } },
    tickLine: { visible: false, style: { lineWidth: 0 } },
    label: {
      style: textStyle,
    },
    grid: {
      visible: false,
    },
  },
  padding: [0, 0, 10, 0],
  color: 'l(0) 0:rgba(24, 137, 243, 1) 1:rgba(0, 210, 255, 1)',
};
```

### 组件库内部配置

| 细分配置     | 功能描述                                                        | 类型                         | 是否必选 | 默认值                                                |
| ------------ | --------------------------------------------------------------- | ---------------------------- | -------- | ----------------------------------------------------- |
| xField       | 条形在 x 方向长度映射对应的数据字段名，一般对应一个离散字段     | string                       | true     |                                                       |
| yField       | 条形在 y 方向位置映射所对应的数据字段名，一般对应一个分类字段。 | string                       | true     |                                                       |
| color        | 指定条形颜色                                                    | string \| string[]           | true     | 'l(0) 0:rgba(24, 137, 243, 1) 1:rgba(0, 210, 255, 1)' |
| barSize      | 设置条形高度,'auto' 时自动计算高度                              | number \| 'auto'             | false    | 'auto'                                                |
| barSizeRange | 设置条形高度范围，只有 barSize 为'auto'时会生效                 | [number, number]             | false    | [14, 30]                                              |
| padding      | 图表内边距                                                      | string \| number \| number[] | false    | [0, 0, 10, 0]                                         |

### Demo

- 基本用法

<code src="./base.tsx">

- 设置固定 barSize 为 20

<code src="./barSize.tsx">

- 设置 barSize 为 'auto' 并配合 barSizeRange 自动计算 barSize

<code src="./autoBarSize.tsx">
