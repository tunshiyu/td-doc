## 径向堆叠柱形图

### 图表库

基于 G2 实现，不支持其他配置，图表组件库中做了语法糖处理，函数使用方法与其他 G2Plot 类 create 方法一致，<a href="https://g2.antv.vision/zh/examples/bar/basic#radial-bar">官网示例</a>。

### 默认配置

```js
const config = {
  radiusField: 'value',
  colorField: 'type',
};
```

### 组件库内部配置

| 细分配置   | 功能描述                             | 类型   | 是否必选 | 默认值  |
| ---------- | ------------------------------------ | ------ | -------- | ------- |
| angleField | 扇形切片大小（弧度）所对应的数据字段 | string | true     | 'value' |
| colorField | 扇形颜色映射对应的数据字段名         | string | true     | 'type'  |

### Demo

- 基本用法

<code src="./base.tsx">
