## ComCard

是大屏卡片组件容器，显示标题，副标题和右侧 extra 组件，使用方法类似组件库 Card 组件。

### 接受参数

| 属性        | 说明              | 类型                            | 必填  | 默认值    |
| ----------- | ----------------- | ------------------------------- | ----- | --------- |
| title       | Card 标题         | string                          | true  |           |
| subtitle    | Card 副标题       | string                          | false |           |
| extra       | 右侧组件/文本     | string \| React.ReactNode       | false |           |
| mode        | 显示模式          | 'default' \| 'shineWayPurchase' | false | 'default' |
| headerStyle | Card 头部行间样式 | CSSProperties                   | false |           |
| titleStyle  | 主标题行间样式    | CSSProperties                   | false |           |

### Demo

- 主要用法

<code src="./base.tsx">

- 带副标题

<code src="./subtitle.tsx">

- 带右侧组件

<code src="./extra.tsx">

- mode 为 shineWayPurchase

<code src="./shineWay.tsx">
