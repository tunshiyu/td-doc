## 堆叠柱状图

### 图表库

基于 G2Plot 实现,其他配置参考 G2Plot 的 <a href="https://g2plot.antv.vision/zh/examples/column/stacked/API">堆叠柱图</a>。

### 默认配置

```js
const config = {
  // 见基础配置说明-公共配置
  ...baseConfig,
  xField: 'date',
  yField: 'value',
  stackField: 'type',
  color: [
    'rgba(0, 187, 255, 1)',
    'rgba(51, 85, 247, 1)',
    'rgba(56, 176, 59, 1)',
    'rgba(254, 176, 30, 1)',
  ],
};
```

### 标准配置

| 细分配置    | 功能描述                                                                                 | 类型                                                                                                                                                                                                                                            | 是否必选 |
| ----------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| xField      | x 轴对应字段名                                                                           | string                                                                                                                                                                                                                                          | true     |
| yField      | y 轴对应字段名                                                                           | string                                                                                                                                                                                                                                          | true     |
| stackField  | 分组字段名，通过该字段的值，柱子将会被分割为多个部分，通过颜色进行区分。                 | string                                                                                                                                                                                                                                          | true     |  | false |
| color       | 指定柱子各区块颜色，即可以指定一系列色值，也可以通过回调函数的方法根据对应数值进行设置。 | string \| string[] \| Function                                                                                                                                                                                                                  | false    |
| columnSize  | 设置柱形宽度                                                                             | number                                                                                                                                                                                                                                          | false    |
| columnStyle | 设置柱子样式                                                                             | object:<br/> -fill: string 填充颜色<br/> -stroke: string 描边颜色<br/> -lineWidth: number 描边宽度<br/> -lineDash: number 虚线描边<br/> -opacity: number 整体透明度<br/> -fillOpacity: number 填充透明度<br/> -strokeOpacity: number 描边透明度 | false    |

### Demo

- 基本用法

<code src="./base.tsx">
