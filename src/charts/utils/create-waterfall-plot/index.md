## 瀑布图

### 图表库

基于 G2Plot 实现,其他配置参考 G2Plot 的 <a href="https://g2plot.antv.vision/zh/examples/column/waterfall/API">瀑布图</a>。

### 默认配置

```js
const config = {
  // 见基础配置说明-公共配置
  ...baseConfig,
  label: { visible: false },
  showTotal: { visible: false, label: '' },
  color: {
    rising: 'rgba(216, 30, 25, 1)',
    falling: 'rgba(73, 213, 18, 1)',
    total: 'rgba(73, 213, 18, 0)',
  },
};
```

### 标准配置

| 细分配置       | 功能描述                             | 类型                                                                                                                                                                                                                                                      | 是否必选 |
| -------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| xField         | x 轴对应字段名                       | string                                                                                                                                                                                                                                                    | true     |
| yField         | y 轴对应字段名                       | string                                                                                                                                                                                                                                                    | true     |
| colorField     | 柱形颜色映射对应的数据字段名(不推荐) | string                                                                                                                                                                                                                                                    | true     |  | false |
| color          | 指定瀑布图柱形颜色                   | string \| string[] \| Function.<br>string：指定值为单值时，配置瀑布图柱子的颜色<br>object： 指定值为一个对象数组时，可配置涨跌和总计值颜色，可选值如下：<br> -rising: 正值柱形填充颜色 <br>-falling: 负值柱形填充颜色<br> -total: 总计值柱形填充颜色,可选 | false    |
| waterfallStyle | 设置柱子样式                         | object:<br/> -fill: string 填充颜色<br/> -stroke: string 描边颜色<br/> -lineWidth: number 描边宽度<br/> -lineDash: number 虚线描边<br/> -opacity: number 整体透明度<br/> -fillOpacity: number 填充透明度<br/> -strokeOpacity: number 描边透明度           | false    |

### Demo

- 基本用法

<code src="./base.tsx">
