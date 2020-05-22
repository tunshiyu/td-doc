<!--
 * @文件描述:
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2020-05-22 15:51:41
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-22 16:49:51
-->

## CustomTable

集合了滚动功能的 Table 组件。

### 何时使用

当你需要看到大量<b>表格类型</b>的文字信息或<b>预警</b>时。

### 接受参数

| 属性          | 说明        | 类型                                                                        | 必填  | 默认值 |
| ------------- | ----------- | --------------------------------------------------------------------------- | ----- | ------ |
| columns       | 列数组      | [ColumnsProps[]](/charts/components/custom-table#ColumnsProps类型) (见下方) | true  | []     |
| dataSource    | 表格数据源  | object[]                                                                    | true  | []     |
| enabledScroll | 允许 scroll | boolean                                                                     | false | false  |

#### ColumnsProps 类型

| 字段      | 说明                             | 类型                                    | 必填  | 默认值 |
| --------- | -------------------------------- | --------------------------------------- | ----- | ------ |
| dataIndex | 唯一值，同 antd 中的 dataIndex   | string                                  | true  |
| title     | 表头标题                         | string                                  | false |        |
| key       | 根据对应 columns 的 key 渲染数据 | string                                  | false |        |
| render    | 同 antd 中的 render()            | (record: object): string \| JSX.Element | false |        |
| width     | 宽度百分比                       | number                                  | false |        |
| align     | 文字布局                         | 'left' \| 'center' \| 'right'           | false | left   |

### Demo

<code src="./base.tsx" >
