## ComBlock

是承载 ComCard 和 ChartPlot 的容器，效果为蓝色边框和黑色背景，可以触发 onClick 事件。

### 接受参数

| 属性             | 说明                         | 类型                              | 必填  | 默认值 |
| ---------------- | ---------------------------- | --------------------------------- | ----- | ------ |
| onClick          | 容器点击事件                 | (event: React.MouseEvent) => void | false |        |
| contentClassName | 传入内部子容器中的 className | string                            | false |        |

### Demo

```tsx
import React from 'react';
import { ComBlockDemo } from 'dumi-lib';

const ComBlock = () => <ComBlockDemo />;

export default ComBlock;
```

```ts
// ComBlockDemo
import React from 'react';
import { ComBlock } from '@td-design/charts';

const ComBlockDemo = () => (
  <ComBlock>
    <span style={{ color: '#fff' }}>我是内容</span>
  </ComBlock>
);

export default ComBlockDemo;
```
