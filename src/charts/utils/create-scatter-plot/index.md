## 单象限散点图

### 图表库

基于 G2Plot 实现,其他配置参考 G2Plot 的 <a href="https://g2plot.antv.vision/zh/examples/bubble/basic/API">气泡图</a>。

### 注意事项 📌

因为 G2Plot 的气泡图的数据源要求 y 轴的数据必须为数字，所以用 yNameFormatter 来修改 y 轴 label。

### 默认配置

```js
// 获得日期字符串
const getDateString = (dateString: string) => {
  if (dateString.length === 8) {
    return `${dateString.slice(0, 4)}/${dateString.slice(4, 6)}/${dateString.slice(6, 8)}`;
  }
  if (dateString.length === 6) {
    return `${dateString.slice(0, 4)}/${dateString.slice(4, 6)}`;
  }
  return dateString;
};
const config = {
  // 见基础配置说明-公共配置
  ...basePieConfig,
    xField: 'date',
    yField: 'type',
    sizeField: 'value',
    padding: [20, 20, 50, 50],
    pointSize: [6, 16],
    colorField: 'color',
    color: ['#4E48DF', '#006BFF', '#00BBFF'],
    tooltip: {
      formatter: (date, type) => {
        const selectedValue = data.filter(
          item => `${item[xField]}` === `${date}` && `${item[yField]}` === `${type}`,
        )[0];
        const value =
          selectedValue && selectedValue[sizeField] ? (selectedValue[sizeField] as number) : 0;
        return { name: sizeField, value };
      },
    },
    legend: {
      marker: {
        symbol: 'square',
        style: {
          r: 5,
        },
      },
    },
    xAxis: {
      visible: true,
      // 计算得到的x轴最小值
      min: minXData - 1,
      // 计算得到的x轴最大值
      max: maxXData + 1,
      grid: {
        visible: false,
      },
      label: {
        // 过滤小数点和多余标签
        formatter: arg => {
          const axisNumber = +arg;
          if (
            Math.floor(axisNumber) === axisNumber &&
            axisNumber <= maxXData &&
            axisNumber >= minXData
          ) {
            return getDateString(arg);
          }
          return '';
        },
        autoRotate: true,
      },
      line: {
        visible: true,
        style: {
          stroke: '#094B85',
        },
      },
    },
    yAxis: {
      // 计算得到的Y轴最小值
      min: minYData - 1,
      // 计算得到的y轴最大值
      max: maxYData,
      grid: {
        visible: false,
      },
      line: {
        visible: false,
      },
      label: {
        formatter: arg => {
          const axisNumber = +arg;
          // 过滤小数点和多余标签
          if (
            Math.floor(axisNumber) === axisNumber &&
            axisNumber <= maxYData &&
            axisNumber >= minYData
          ) {
            let formateArg = arg;
            if (yNameFormatter) {
              formateArg = yNameFormatter[arg];
            }
            return formateArg;
          }
          return '';
        },
      },
    },
    pointStyle: {
      stroke: 'rgba(0,0,0,0)',
    }
};
```

### 组件库内部配置

| 细分配置       | 功能描述                      | 类型                      | 是否必选 | 默认值 |
| -------------- | ----------------------------- | ------------------------- | -------- | ------ |
| yNameFormatter | 格式化 y 轴字段的 format 函数 | (name: number) => string; | false    |        |

### 标准配置

| 细分配置   | 功能描述                                                                                                                                                     | 类型                                                                                                                                                                                                                                            | 是否必选 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| xField     | x 轴对应字段名，一般对应一个连续字段                                                                                                                         | string                                                                                                                                                                                                                                          | true     |
| yField     | y 轴对应字段名，一般对应一个连续字段                                                                                                                         | string                                                                                                                                                                                                                                          | true     |
| colorField | 点颜色映射对应的数据字段名                                                                                                                                   | string                                                                                                                                                                                                                                          | false    |
| sizeField  | 决定气泡图点大小的字段名                                                                                                                                     | string                                                                                                                                                                                                                                          | false    |
| color      | 指定点的颜色。如没有配置 colorField,指定一个单值即可。对 colorFiled 进行了配置的情况下，即可以指定一系列色值，也可以通过回调函数的方法根据对应数值进行设置。 | string\|string[] \| Function                                                                                                                                                                                                                    | false    |
| pointSize  | 指定气泡图点大小的值域，顺序为[min,max]                                                                                                                      | number[ ]                                                                                                                                                                                                                                       | false    |
| pointStyle | 设置点样式                                                                                                                                                   | object:<br/> -fill: string 填充颜色<br/> -stroke: string 描边颜色<br/> -lineWidth: number 描边宽度<br/> -lineDash: number 虚线描边<br/> -opacity: number 整体透明度<br/> -fillOpacity: number 填充透明度<br/> -strokeOpacity: number 描边透明度 | false    |

### Demo

- 基础用法，使用 yNameFormatter 来格式化 label

<code src="./base.tsx">
