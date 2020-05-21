## 雷达图

### 图表库

基于 G2Plot 实现,其他配置参考 G2Plot 的 <a href="https://g2plot.antv.vision/zh/examples/radar/basic/API">雷达图</a>。

### 默认配置

```js
const config = {
  // 见基础配置说明-公共配置
  ...basePieConfig,
  data,
  angleField: 'item',
  radiusField: 'score',
  seriesField: 'user',
  radiusAxis: {
    grid: {
      line: {
        type: 'line',
        style: { stroke: 'rgba(0, 187, 255, 0.5)' },
      },
    },
    label: {
      visible: false,
    },
    line: {
      visible: true,
      style: {
        stroke: 'rgba(0, 234, 255, 0)',
      },
    },
  },
  angleAxis: {
    grid: {
      visible: true,
      line: {
        style: {
          stroke: 'rgba(0, 234, 255, 0.1)',
        },
      },
    },
  },
  color: ['#EC6725', '#FEB01E'],
  line: {
    visible: true,
    style: {
      opacity: 0.5,
    },
  },
  point: {
    visible: false,
    shape: 'circle',
  },
};
```

### 标准配置

| 细分配置    | 功能描述                                                                                                             | 类型                 | 是否必选 | 默认值 |
| ----------- | -------------------------------------------------------------------------------------------------------------------- | -------------------- | -------- | ------ |
| angleField  | 雷达图映射到圆周角度所对应的字段，一般为一个分类字段                                                                 | string               | true     |        |
| radiusField | 雷达图映射到半径所对应的字段，一般为一个连续字段                                                                     | string               | true     |        |
| seriesField | 对雷达图进行分组的字段，一般对应一个分类字段。通过该字段的值，雷达图将会被分为多个组，通过颜色进行区分，并上下重叠。 | string               | true     |        |
| smooth      | 是否以曲线的形态绘制 (spline)                                                                                        | boolean              | false    | false  |
| color       | 指定颜色，即可以指定一系列色值，也可以通过回调函数的方法根据对应数值进行设置。                                       | string[] \| Function | false    |        |
| area        | 配置雷达图上的颜色填充                                                                                               | object:(详见官网)    | false    |        |
| point       | 配置雷达图上的点                                                                                                     | object:(详见官网)    | false    |        |
| line        | 配置雷达图上的折线                                                                                                   | object:(详见官网)    | false    |        |

### Demo

- 基本用法

<code src="./base.tsx">
