## 事件

在 G2Plot 中，图表、图形、图例等区域都拥有各自的点击事件，赋予了我们触发交互的能力。

### OnPointClick Demo

此 Demo 还原了神威项目的点击交互。点击某个点后，我们会拿到点击的点的详情参数(此时一般会携带该参数请求详情图表的数据)，并将 name 设置给详情图表后，切换到详情图表。点击左上角的 Title ,将回到初始图表。<br/>
你可以打开控制台，并在下面的 Demo 中点击 Potin、线、图表来查看打印的 events 参数。

<code src="./events.tsx">

### 事件文档

下面只列举几个常用的，详情请参考[g2plot 事件文档](https://g2plot.antv.vision/zh/examples/bar/basic/API#%E4%BA%8B%E4%BB%B6)

#### 常用事件

| onBarClick<br/>条形点击事件        | onPointClick <br/> Point 点击事件  | onLineClick<br/>线点击事件     | onAxisClick<br/>坐标轴点击事件       |
| ---------------------------------- | ---------------------------------- | ------------------------------ | ------------------------------------ |
| onLegendMousemove<br/>图例移入事件 | onPlotMousedown <br/> 图表点击事件 | onBarDblClick<br/>条形双击事件 | onBarMouseleave<br/>条形鼠标离开事件 |
