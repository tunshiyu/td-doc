---
group:
  title: 组件DOM
---

## ChartDom

是 `ComBlock` , `ComCard` , `ChartPlot` 的组合体，一般需求都可以直接用这个 Dom 完成。

### 接受参数

| 属性    | 说明                                                                                    | 类型                                                                                 | 必填  | 默认值 |
| ------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----- | ------ |
| getDom  | 接受生成图表的方法和配置，返回 Layer 对象可用于[状态管理](../../../charts/senior-usage) | (dom: HTMLElement) => create 图表方法([配置说明](../../../charts/utils/base-config)) | true  |
| title   | Card 标题                                                                               | string                                                                               | true  |        |
| onClick | 容器点击事件                                                                            | (event: React.MouseEvent) => void                                                    | false |        |

### Demo

<code src="./base.tsx" >

以上为使用 `ChartDom` 生成一个普通折线图的使用方法，`createLinePlot` 为生成折线图的方法，后面会介绍。
