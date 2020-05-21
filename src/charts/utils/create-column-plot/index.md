## 普通柱状图

### 图表库

基于 G2Plot 实现,其他配置参考 G2Plot 的 <a href="https://g2plot.antv.vision/zh/examples/column/basic/API">基础柱状图</a>。

### 默认配置

```js
const config = {
  // 见基础配置说明-公共配置
  ...baseConfig,
};
```

### 标准配置

| 细分配置    | 功能描述                                 | 类型                                                                                                                                                                                                                                            | 是否必选 |
| ----------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| xField      | x 轴对应字段名                           | string                                                                                                                                                                                                                                          | true     |
| yField      | y 轴对应字段名                           | string                                                                                                                                                                                                                                          | true     |
| colorField  | 柱形颜色对应的字段名(不推荐)             | string                                                                                                                                                                                                                                          | 可选     |
| color       | 指定柱形颜色，无 colorField 时，单值即可 | string \| string[] \| Function                                                                                                                                                                                                                  | true     |
| columnSize  | 设置柱形宽度                             | number                                                                                                                                                                                                                                          | false    |
| columnStyle | 设置柱子样式                             | object:<br/> -fill: string 填充颜色<br/> -stroke: string 描边颜色<br/> -lineWidth: number 描边宽度<br/> -lineDash: number 虚线描边<br/> -opacity: number 整体透明度<br/> -fillOpacity: number 填充透明度<br/> -strokeOpacity: number 描边透明度 | false    |

### Demo

<code src="./base.tsx">
