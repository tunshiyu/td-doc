## 玫瑰图

### 图表库

基于 G2 实现，不支持其他配置，图表组件库中做了语法糖处理，函数使用方法与其他 G2Plot 类 create 方法一致，<a href="https://g2.antv.vision/zh/examples/pie/rose#rose">官网示例</a>。

### 默认配置

```js
const config = {
  radiusField: 'value',
  colorField: 'type',
  layout: 'all',
  emptyInside: true,
  hasAxis: false,
};
```

### 组件库内部配置

| 细分配置    | 功能描述                     | 类型          | 是否必选 | 默认值  |
| ----------- | ---------------------------- | ------------- | -------- | ------- |
| radiusField | 扇形颜色映射对应的数据字段名 | string        | true     | 'value' |
| colorField  | 扇形颜色映射对应的数据字段名 | string        | true     | 'type'  |
| layout      | 是否为半圆                   | 'all'\|'half' | false    | 'all'   |
| emptyInside | 是否空心                     | boolean       | false    | true    |
| hasAxis     | 是否显示轴                   | boolean       | false    | false   |
| padding     | 图表内边距                   | number[]      | number   | false   | [-50, 0, 50, 0] |

### Demo

- 基本用法

<code src="./base.tsx">

- layout 为 'half'(半个圆)

<code src="./halfLayout.tsx">

- emptyInside 为 false(非空心)

<code src="./hasInside.tsx">

- hasAxis 为 true

<code src="./hasAxis.tsx">
