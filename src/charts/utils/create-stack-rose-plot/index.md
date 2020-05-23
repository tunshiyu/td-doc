## 堆叠玫瑰图

### 图表库

基于 G2Plot 实现,其他配置参考 G2Plot 的 <a href="https://g2plot.antv.vision/zh/examples/rose/rose/API">玫瑰图</a>。

### 默认配置

```js
const config = {
  // 见基础配置说明-公共配置
  ...basePieConfig,
  padding: [20, 50, 50, 50],
  radius: 1,
  radiusField: 'value',
  categoryField: 'category',
  stackField: 'type',
  label: {
    visible: false,
    type: 'inner',
    content: text => text.value,
  },
  legend: {
    ...baseLegend,
    text: {
      formatter: txt => {
        if (txt !== '空') {
          return txt;
        }
        return '';
      },
      style: { fill: 'rgba(255, 255, 255, 0.7)' },
    },
    marker: baseMarker,
  },
  tooltip: {
    // 显示其他数据
    shared: true,
    custom: {
      onChange: (_dom, cfg) => {
        const { items } = cfg;
        if (items) {
          items.forEach((item, idx) => {
            if (
              item.data?.type === '空' ||
              /^[ ]*$/.test(item.data?.category)
            ) {
              items.splice(idx, 1);
            }
          });
        }
      },
    },
  },
  sectorStyle: {
    stroke: 'rgba(255, 255, 255, 0)',
    fillOpacity: 1,
  },
  color: ['#00BBFF', '#A13ED6', '#EC6725', '#FEB01E'],
};
```

### 组件库内部配置

| 细分配置 | 功能描述     | 类型               | 是否必选 | 默认值                                       |
| -------- | ------------ | ------------------ | -------- | -------------------------------------------- |
| isSpiral | 是否为单例图 | boolean            | false    | false                                        |
| color    | 扇形颜色     | string \| string[] | false    | ['#00BBFF', '#A13ED6', '#EC6725', '#FEB01E'] |

注：color 在图表组件库中会自动处理为显示需要的数组。颜色虽然支持只传入 string 单值，但是不推荐。

### 标准配置

| 细分配置      | 功能描述                                                                             | 类型                                                                                                                                                                                                                                            | 是否必选 |
| ------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| radiusField   | 扇形切片半径长度所对应的数据字段名                                                   | string                                                                                                                                                                                                                                          | true     |
| categoryField | 扇形切片分类所对应的数据字段名（每个扇形的弧度相等）                                 | string                                                                                                                                                                                                                                          | true     |
| colorField    | 扇形切片颜色所对应的数据字段名。                                                     | string                                                                                                                                                                                                                                          | true     |
| radius        | 玫瑰图的半径。配置值域为 [0,1]，0 代表环图大小为 0，即不显示，1 代表环图撑满绘图区域 | number                                                                                                                                                                                                                                          | false    |
| color         | 指定扇形颜色，即可以指定一系列色值，也可以通过回调函数的方法根据对应数值进行设置。   | string \| string[] \| Function                                                                                                                                                                                                                  | false    |
| sectorStyle   | 设置扇形样式                                                                         | object:<br/> -fill: string 填充颜色<br/> -stroke: string 描边颜色<br/> -lineWidth: number 描边宽度<br/> -lineDash: number 虚线描边<br/> -opacity: number 整体透明度<br/> -fillOpacity: number 填充透明度<br/> -strokeOpacity: number 描边透明度 | false    |

### Demo

- 基本用法

<code src="./base.tsx">

- isSpiral 为 true (螺旋堆叠)

<code src="./isSpiral.tsx">

- 修改颜色 为 ['#ff0000', '#00ff00']

<code src="./color.tsx">
