## 水波图

### 图表库

基于 G2Plot 实现,其他配置参考 G2Plot 的 <a href="https://g2plot.antv.vision/zh/examples/liquid/basic/API">水波图</a>。

### 注意事项 📌

- 水波图在 G2Plot 中不支持 legend 图例配置，不会显示。
- 在图表组件库中自动进行了百分比格式化，使用水波图时直接在 value 传入百分比数值即可。
- 目前水波图无法实现自动居中，如果尺寸与设计规范不一致，需要手动控制 padding 以居中。

### 默认配置

```js
const config = {
  // 见基础配置说明-公共配置
  ...basePieConfig,
  color: '#10ADF9',
  padding: [0, 0, 30, -50],
  min: 0,
  max: 100,
  value: data,
  liquidStyle: {
    stroke: '#00BBFF',
  },
  statistic: {
    adjustColor: false,
    style: {
      fill: '#fff',
      fontSize: 24,
    },
    formatter: value => value + '%',
  },
};
```

### 组件库内部配置

| 细分配置    | 功能描述 | 类型   | 是否必选 | 默认值 |
| ----------- | -------- | ------ | -------- | ------ |
| fixedNumber | 精确位数 | number | false    | 0      |
| suffix      | 后缀     | string | false    | '%'    |

### 标准配置

| 细分配置    | 功能描述           | 类型                                                                                                                                                                                   | 是否必选 |
| ----------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| value       | 设置水波图的当前值 | number                                                                                                                                                                                 | true     |
| max         | 设置水波图的最大值 | number                                                                                                                                                                                 | true     |
| min         | 设置水波图的最小值 | number                                                                                                                                                                                 | true     |
| color       | 配置水波图的颜色   | string                                                                                                                                                                                 | false    |
| liqiudStyle | 配置水波图的样式   | object:<br/> -fill: string 填充颜色<br/> -stroke: string 描边颜色<br/> -lineWidth: number 边框宽度<br/> -lineDash: [number,number] 虚线描边样式<br/> -strokeOpacity: number 描边透明度 | false    |

### Demo

- 基本用法

<code src="./base.tsx">

- 修改 fixedNumber 保留两位小数

<code src="./fixedNumber.tsx">

- 修改后缀为"元"

<code src="./suffix.tsx">
