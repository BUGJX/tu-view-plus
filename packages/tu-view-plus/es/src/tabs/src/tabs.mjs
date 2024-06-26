import { buildProps as a } from "@tu-view-plus/utils";
import { UPDATE_MODEL_EVENT as l } from "@tu-view-plus/constants";
const u = a({
  modelValue: {
    type: [String, Number]
  },
  /**
   * @zh 当前选中的标签的 `key`
   * @en The `key` of the currently selected label
   * @vModel
   */
  activeKey: {
    type: [String, Number],
    default: void 0
  },
  /**
   * @zh 默认选中的标签的`key`（非受控状态，为空时选中第一个标签页）
   * @en The `key` of the tab selected by default (uncontrolled state, select the first tab page when it is empty)
   */
  defaultActiveKey: {
    type: [String, Number],
    default: void 0
  },
  /**
   * @zh 选项卡的位置
   * @en Position of the tab
   * @values 'left', 'right', 'top', 'bottom'
   */
  position: {
    type: String,
    default: "top"
  },
  /**
   * @zh 选项卡的类型
   * @en The type of tab
   * @values 'default', 'flat', 'card', 'card-gutter', 'text', 'rounded', 'capsule'
   */
  type: {
    type: String,
    default: "default"
  },
  /**
   * @zh 选项卡的方向
   * @en The direction of tab
   * @values 'horizontal', 'vertical'
   */
  direction: {
    type: String,
    default: "horizontal"
  },
  /**
   * @zh 是否开启可编辑模式
   * @en Whether to enable editable mode
   */
  editable: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否显示增加按钮（仅在可编辑模式可用）
   * @en Whether to display the add button (only available in editable mode)
   */
  showAddButton: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否在不显示标签时销毁内容
   * @en Whether to destroy the content when the label is not displayed
   */
  destroyOnHide: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否在首次展示标签时挂载内容
   * @en Whether to mount the content when the label is first displayed
   */
  lazyLoad: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 高度撑满容器，只在水平模式下生效。
   * @en The height of the container is fully supported, and it only takes effect in horizontal mode.
   */
  justify: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否开启选项内容过渡动画
   * @en Whether to enable option content transition animation
   */
  animation: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 选项卡头部是否存在水平边距。仅对 `type` 等于 `flat`、`text` 类型的选项卡生效
   * @en Whether there is a horizontal margin on the header of the tab. Only valid for tabs with `type` equal to `flat` and `text` type
   */
  headerPadding: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 创建标签后是否切换到新标签（最后一个）
   * @en Whether to switch to a new tab after creating a tab (the last one)
   */
  autoSwitch: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否隐藏内容
   * @en Whether to hide content
   */
  hideContent: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 触发方式
   * @en Trigger method
   * @values 'hover','click'
   */
  trigger: {
    type: String,
    default: "click"
  }
}), i = {
  [l]: (e) => !0,
  "update:activeKey": (e) => !0,
  /**
   * @zh 当前标签值改变时触发
   * @en Triggered when the current tag value changes
   * @property { string | number } key
   */
  change: (e) => !0,
  /**
   * @zh 用户点击标签时触发
   * @en Triggered when the user clicks on the tab
   * @property { string | number } key
   */
  tabClick: (e, t) => !0,
  /**
   * @zh 用户点击增加按钮时触发
   * @en Triggered when the user clicks the add button
   */
  add: (e) => !0,
  /**
   * @zh 用户点击删除按钮时触发
   * @en Triggered when the user clicks the delete button
   * @property { string | number } key
   */
  delete: (e, t) => !0
};
export {
  i as tabsEmits,
  u as tabsProps
};
