## 区间条形图

### 图表库

基于 G2Plot 实现,其他配置参考 G2Plot 的 <a href="https://g2plot.antv.vision/zh/examples/bar/range/API">区间条形图</a>。

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
  color: 'l(0) 0:rgba(24, 137, 243, 1) 1:rgba(0, 210, 255, 1)',
};
```

### 标准配置

| 细分配置   | 功能描述                                                        | 类型                                                                                                                                                                                                                                            | 是否必选 |
| ---------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| xField     | 条形在 x 方向长度映射对应的数据字段名，一般对应一个离散字段     | string                                                                                                                                                                                                                                          | true     |
| yField     | 条形在 y 方向位置映射所对应的数据字段名，一般对应一个分类字段。 | string                                                                                                                                                                                                                                          | true     |
| colorField | 条形颜色对应的字段名(不推荐)                                    | string                                                                                                                                                                                                                                          | 可选     |
| color      | 指定条形颜色，无 colorField 时，单值即可                        | string \| string[] \| Function                                                                                                                                                                                                                  | true     |
| barSize    | 设置条形高度                                                    | number                                                                                                                                                                                                                                          | false    |
| barStyle   | 设置条形样式                                                    | object:<br/> -fill: string 填充颜色<br/> -stroke: string 描边颜色<br/> -lineWidth: number 描边宽度<br/> -lineDash: number 虚线描边<br/> -opacity: number 整体透明度<br/> -fillOpacity: number 填充透明度<br/> -strokeOpacity: number 描边透明度 | false    |

### Demo

<code src="./base.tsx">
