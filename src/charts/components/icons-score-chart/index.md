## IconsScoreChart

评分组件

### 何时使用

当你需要`对比`不同分类物品的`评分`时。

### 接受参数

| 属性                | 说明                                               | 类型                                          | 必填  | 默认值   |
| ------------------- | -------------------------------------------------- | --------------------------------------------- | ----- | -------- |
| scores              | 由该数组映射到每条数据的`评分`。默认在右上角显示。 | {name: string;value: string;unit?: string;}[] | true  |
| standards           | 由该数组映射到穿过每条评分的`虚线`                 | number[]                                      | false |          |
| frontIcon           | 前面的图片(选用亮色)                               | string                                        | false | 默认图片 |
| backIcon            | 后面的图片(选用暗色)                               | string                                        | false | 默认图片 |
| size                | 图片尺寸大小。图片会以该尺寸自适应铺满容器。       | number                                        | false | 16       |
| percentageItemStyle | 定义 percentageItem 样式                           | CSSProperties                                 | false |
| label               | percentageItem 上方`左侧文字`                      | ReactNode                                     | false |
| quota               | percentageItem 上方`右侧文字`                      | ReactNode                                     | false |

### Demo

<code src="./base.tsx" >
