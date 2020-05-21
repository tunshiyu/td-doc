## 堆叠面积图

### 图表库

基于 G2Plot 实现,其他配置参考 G2Plot 的 <a href="https://g2plot.antv.vision/zh/examples/area/stacked/API">堆叠面积图</a>。

### 默认配置

```js
const config = {
  // 见基础配置说明-公共配置
  ...baseConfig,
  data,
  xField: 'date',
  yField: 'value',
  stackField: 'type',
  color: ['#FEB01E', '#EC6725', '#38B03B'],
};
```

### 标准配置

| 细分配置   | 功能描述                                                                             | 类型                                                                                                                                                                                                                                    | 是否必选 |
| ---------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| xField     | x 轴对应字段名                                                                       | string                                                                                                                                                                                                                                  | true     |
| yField     | y 轴对应字段名                                                                       | string                                                                                                                                                                                                                                  | true     |
| stackField | 面积堆叠的字段名，通过该字段的值，面积图将会被分割为堆积的多个部分，通过颜色进行区分 | string                                                                                                                                                                                                                                  | true     |
| color      | 指定图形颜色，即可以指定一系列色值，也可以通过回调函数的方法根据对应数值进行设置。   | string[] \| Function                                                                                                                                                                                                                    | false    |
| areaStyle  | 设置 area 图形样式                                                                   | object:<br/> -fill: string 填充颜色<br/> -stroke: string 描边颜色<br/> -lineWidth: number 线宽<br/> -lineDash: number 虚线描边<br/> -opacity: number 透明度<br/> -fillOpacity: number 填充透明度<br/> -strokeOpacity: number 描边透明度 | false    |

### Demo

<code src="./base.tsx">
