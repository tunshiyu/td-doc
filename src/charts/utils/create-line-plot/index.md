## 普通折线图

### 图表库

基于 G2Plot 实现,其他配置参考 G2Plot 的 <a href="https://g2plot.antv.vision/zh/examples/line/basic/API">基础折线图</a>。

### 默认配置

```js
const config = {
  // 见基础配置说明-公共配置
  ...baseConfig,
  lineStyle: {
    // 折线粗细
    lineWidth: 1,
  },
  // 节点样式
  point: {
    visible: true,
    style: {
      lineWidth: 6,
      strokeOpacity: 0.15,
    },
  },
  // 折线颜色
  color: [
    'rgba(0, 187, 255, 1)',
    'rgba(51, 85, 247, 1)',
    'rgba(56, 176, 59, 1)',
    'rgba(254, 176, 30, 1)',
  ],
};
```

### 标准配置

| 细分配置    | 功能描述                                                                           | 类型                                                                                                                                | 是否必选   |
| ----------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| xField      | x 轴对应字段名                                                                     | string                                                                                                                              | true       |
| yField      | y 轴对应字段名                                                                     | string                                                                                                                              | true       |
| seriesField | 分组字段名，分为多条颜色不同的折线。                                               | string                                                                                                                              | 多折线必选 |
| color       | 指定折线颜色，即可以指定一系列色值，也可以通过回调函数的方法根据对应数值进行设置。 | string[] \| Function                                                                                                                | false      |
| lineStyle   | 设置折线样式                                                                       | object:<br/> -stroke: string 折线颜色<br/> -lineWidth: number 线宽<br/> -lineDash: number 虚线显示<br/> -opacity: number 透明度     | false      |
| point       | 配置折线上的点                                                                     | object:<br/> -visible: boolean 是否显示<br/> -shape: string 数据点形状<br/> -size: number 数据点大小<br/> -style: object 数据点样式 | false      |

### Demo

<code src="./base.tsx">
