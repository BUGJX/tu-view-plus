# Timeline 时间轴

## 何时使用

可视化地呈现时间流信息。

## 基础用法

:::demo src="./basic.vue" title="时间轴的基础用法。"

:::

## 自定义节点内容

:::demo src="./custom-dot-content.vue" title="自定义节点内容。"

:::

## 自定义节点

:::demo src="./custom-dot.vue" title="可通过属性 dotColor、dotType 设置节点的颜色以及节点类型。同时可通过 dot 直接传入 DOM 自定义节点样式。优先级高于 dotColor 和 dotType。"

:::

## 自定义轴线样式

:::demo src="./custom-dot-line.vue" title="自定义轴线样式。"

:::

## 幽灵节点

:::demo src="./ghost-dot.vue" title="当任务状态正在发生，还在记录过程中，设置 pending 为 true时即可用幽灵节点来表示当前的时间节点。"

:::

## 自定义幽灵节点

:::demo src="./custom-ghost-dot.vue" title="通过插槽 pending-dot 自定制幽灵节点的轴点。"

:::

## 时间轴展示类型

:::demo src="./timeline-show-types.vue" title="设置 mode 为 alternate 时将会交替展示内容。同时可以通过设置 position 属性控制时间轴节点的位置。"

:::

## 纵向时间轴

:::demo src="./vertical-timeline.vue" title="竖直方向的时间轴。"

:::

## 横向时间轴

:::demo src="./horizontal-timeline.vue" title="通过 direction 设置展示横向时间轴。"

:::

## 标签文本位置

:::demo src="./label-position.vue" title="通过 labelPosition 设置标签文本位置。"

:::

## 自定义标签

:::demo src="./custom-label.vue" title="通过 label 插槽自定义标签。"

:::

## Timeline API

### Timeline Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| reverse | 是否倒序 | ^[Boolean] | false |
| direction | 时间轴方向 | ^[String]`'horizontal' \| 'vertical'`| vertical |
| mode | 时间轴的展示类型 | ^[String]`'left' \| 'right' \| 'top' \| 'bottom'\| 'alternate'`| left |
| pending | 是否展示幽灵节点，设置为 true 时候只展示幽灵节点。传入ReactNode时，会作为节点内容展示。 | ^[Boolean] ^[String] | - |
| label-position | 设置标签文本的位置 | ^[String]`'relative' \| 'same'`| same |

### Timeline Slots

| 参数名 | 描述 |
| ------ | ---- |
| dot | 幽灵节点 | - |

<!-- Timeline-Item -->
## Timeline-Item API

### Timeline-Item Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| dot-color | 节点颜色 | ^[String] | - |
| dot-type | 节点类型 | ^[String]`'default' \| 'hollow' \| 'solid'`| default |
| line-type | 时间轴类型 | ^[String]`'solid' \| 'dashed' \| 'dotted'`| solid |
| line-color | 时间轴颜色 | ^[String] | - |
| label | 标签文本 | ^[String] | - |
| position | Item位置 | ^[String]`'left' \| 'right' \| 'top' \| 'bottom'` | - |

### Timeline-Item Slots

| 参数名 | 描述 |
| ------ | ---- |
| dot | 自定义节点 | - |
| label | 自定义标签 | - |