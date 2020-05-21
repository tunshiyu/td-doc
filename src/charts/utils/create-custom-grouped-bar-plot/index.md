## 分组条形图

### 图表库

基于 G2 实现，不支持其他配置，图表组件库中做了语法糖处理，函数使用方法与其他 G2Plot 类 create 方法一致，<a href="https://g2.antv.vision/zh/examples/bar/dodge#bar5">官网示例</a>。

### 默认配置

```js
const config = {
  // 见基础配置说明-公共配置
  xAxis: baseXAxis,
  yAxis: baseYAxis,
  xField: '',
  yField: '',
  groupField: 'type',
  color: [
    'l(0) 0:rgba(236, 103, 37, 1) 1:rgba(254, 176, 30, 1)',
    'l(0) 0:rgba(24, 137, 243, 1) 1:rgba(0, 210, 255, 1)',
  ],
};
```

### 组件库内部配置

| 细分配置   | 功能描述                     | 类型     | 是否必选 | 默认值                                                                                                          |
| ---------- | ---------------------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| xField     | x 轴对应字段名               | string   | true     |                                                                                                                 |
| yField     | y 轴对应字段名               | string   | true     |                                                                                                                 |
| groupField | 分组字段名，分为左右两边柱子 | string   | false    | 'type'                                                                                                          |
| color      | 分别为左右两边柱子的颜色     | string[] | false    | ['l(0) 0:rgba(236, 103, 37, 1) 1:rgba(254, 176, 30, 1)', 'l(0) 0:rgba(24, 137, 243, 1) 1:rgba(0, 210, 255, 1)'] |

### Demo

- 基本用法

<code src="./base.tsx">
