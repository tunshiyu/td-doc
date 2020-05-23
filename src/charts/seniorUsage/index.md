---
group:
  title: 高级用法
---

## 互动状态管理

状态管理类似于 react 中的状态管理，在 bindStateManager 配置第二个参数 的 `setState` 属性中可以定义各种触发事件，其中的`event`是触发事件，state 是触发回调，返回的是例如 `{ name: 'type', exp: origin.type }` 格式的 json，name 是 state 中维护的状态名，exp 是这个状态的值。setState 以后，在 `onStateChange` 中就是各种监听的状态，一旦状态改变就会触发`callback`回调。`callback` 的第一个参数是改变后的状态信息，第二个参数是一个 Plot 对象，有一些基本的`setSelected`(设置选中项的 style),`setDefault`(设置其他默认显示 style)等方法。

### 触发高亮

项目中有时会有一些互动的需求，比如基础环图中的鼠标滑过的高亮效果，图表组件库中内置了鼠标滑过的高亮事件，效果如下：

<code src="./mouseHover.tsx">

此时如果想实现点击的效果。需要先禁用鼠标滑过的效果( highlightEnabled 设为 false)，并自定义状态管理事件。代码如下：

<code src="./mouseClick.tsx">

在所有的 `create` 方法中都会返回一个 `Layer` 的对象，可以在 `Layer` 对象上绑定状态管理方法。

注：常用的 `StateManager`,`DataItem`,`electedItemProps`,`DonutLayer` 类型都在`'@td-design/charts'`有导出，不需要专门安装 `'@antv/g2plot'` 依赖。

官网示例：[官网示例](https://antv-g2plot.gitee.io/zh/examples/advanced/connection)
