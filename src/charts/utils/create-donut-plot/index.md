## 基础环图

### 图表库

基于 G2Plot 实现,其他配置参考 G2Plot 的 <a href="https://g2plot.antv.vision/zh/examples/pie/donut/API">环图</a>。

### 默认配置

```js
const config = {
    // 见基础配置说明-公共配置
    ...basePieConfig,
    radius: 1,
    innerRadius: 0.8,
    angleField: 'value',
    colorField: 'type',
    color: [
      '#02D1FF',
      '#FFBB04',
      '#F35C12',
      '#A72FEB',
      '#49D512',
      '#0054FF',
      '#009DFF',
    ],
    statistic: {
      visible: true,
    },
    label: {
      visible: false,
    },
    pieStyle: {
      stroke: '#122749',
      lineWidth: 6,
      style: {
        marginTop: -10,
      },
    },
    legend: {
      position: 'bottom-center',
      flipPage: false,
      text: {
        {
          style: {
            fill: 'rgba(255, 255, 255, 0.6)',
          },
        },
        formatter: txt => {
          if (txt !== '空') {
            return txt;
          }
          return '';
        },
      },
      title: {
        visible: false,
      },
    },
};
```

### 组件库内部配置

| 细分配置         | 功能描述                       | 类型    | 是否必选 | 默认值 |
| ---------------- | ------------------------------ | ------- | -------- | ------ |
| isSingle         | 是否为单例图                   | boolean | false    | false  |
| titleName        | 中间指标盘的标题，单例图时生效 | string  | false    | '图例' |
| bordered         | 多例图下，扇形间是否有黑色间隔 | boolean | false    | true   |
| highlightEnabled | 鼠标滑过是否高亮               | boolean | false    | true   |

isSingle 为 true(单例) 时具体配置:

```json
{
  "color": ["rgba(0, 187, 255, 1)", "rgba(13, 37, 67, 1)"],
  "pieStyle": {
    "lineWidth": 0
  },
  "statistic": {
    "visible": true,
    /** 触发显示的事件 */
    "triggerOn": "none",
    /** 触发隐藏的事件 */
    "triggerOff": "none",
    /** 自定义指标盘内容 */
    "htmlContent": () => {
      return `<div>
            <div class="ring-guide-name">${titleName}</div>
            <div class="ring-guide-value">${formatedData}<span class="percent-sign">%</span></div>
          </div>`;
    }
  }
}
```

bordered 为 true 时具体配置:

```json
{
  "pieStyle": {
    "lineWidth": 6
  }
}
```

注：bordered 实现原理为扇形描边，所以需要配合 `pieStyle.stroke` 属性保持跟背景色一致。

### 注意事项 📌

如果想使用鼠标点击触发或其他高亮方法请参考 [互动状态管理](/charts/senior-usage/#触发高亮)

### 标准配置

| 细分配置    | 功能描述                                                                           | 类型                                                                                                                                                                                                                                            | 是否必选 |
| ----------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| angleField  | 扇形切片大小（弧度）所对应的数据字段名                                             | string                                                                                                                                                                                                                                          | true     |
| colorField  | 扇形颜色映射对应的数据字段名                                                       | string                                                                                                                                                                                                                                          | true     |
| radius      | 环图的半径。配置值域为 [0,1]，0 代表环图大小为 0，即不显示，1 代表环图撑满绘图区域 | number                                                                                                                                                                                                                                          | false    |
| innerRadius | 环图的内环半径。半径和内环半径决定了环图的厚度。                                   | number                                                                                                                                                                                                                                          | false    |
| color       | 指定扇形颜色，即可以指定一系列色值，也可以通过回调函数的方法根据对应数值进行设置。 | string \| string[] \| Function                                                                                                                                                                                                                  | false    |
| ringStyle   | 设置扇形样式                                                                       | object:<br/> -fill: string 填充颜色<br/> -stroke: string 描边颜色<br/> -lineWidth: number 描边宽度<br/> -lineDash: number 虚线描边<br/> -opacity: number 整体透明度<br/> -fillOpacity: number 填充透明度<br/> -strokeOpacity: number 描边透明度 | false    |

### Demo

- 基本用法

<code src="./base.tsx">

- isSingle 为 true(单例环形) 单例用法

<code src="./isSingle.tsx">

- bordered 为 false(环形无空隙) 用法

<code src="./notBordered.tsx">

- highlightEnabled 为 false(关闭高亮) 用法

<code src="./highlightDisabled.tsx">
