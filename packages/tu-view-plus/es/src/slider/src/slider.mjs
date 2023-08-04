import { buildProps as o, definePropType as e } from "@tu-view-plus/utils";
import { useSizeProp as t } from "@tu-view-plus/hooks";
import { TRIGGER_POSITIONS as a } from "@tu-view-plus/constants";
const d = o({
  /**
   * @zh 绑定值
   * @en binding value
   * @defaultValue 0
   */
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  /**
   * @zh id
   * @en id
   */
  id: {
    type: String,
    default: void 0
  },
  /**
   * @zh 滑动的步长
   * @en Sliding step
   */
  step: {
    type: Number,
    default: 1
  },
  /**
   * @zh 滑动范围的最小值
   * @en Minimum sliding range
   */
  min: {
    type: Number,
    default: 0
  },
  /**
   * @zh 滑动范围的最大值
   * @en Maximum sliding range
   */
  max: {
    type: Number,
    default: 100
  },
  /**
   * @zh 是否显示输入框
   * @en Whether to show the input
   */
  showInput: Boolean,
  /**
   * @zh 在显示输入框的情况下，是否显示输入框的控制按钮
   * @en whether to display control buttons when `show-input` is true
   */
  showInputControls: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 滑块的尺寸
   * @en size of the slider
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...t, default: "medium" },
  /**
   * @zh 输入框的尺寸
   * @en size of the input
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  inputSize: { ...t, default: "medium" },
  /**
   * @zh 是否显示间断点
   * @en whether to display breakpoints
   */
  showStops: Boolean,
  /**
   * @zh 是否显示提示信息
   * @en whether to display tooltip value
   */
  showTooltip: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 格式化提示信息
   * @en format to display tooltip value
   */
  formatTooltip: {
    type: e(Function),
    default: void 0
  },
  /**
   * @zh 是否禁用
   * @en whether Slider is disabled
   */
  disabled: Boolean,
  /**
   * @zh 是否开启选择范围
   * @en whether to select a range
   */
  range: Boolean,
  /**
   * @zh 垂直模式
   * @en vertical mode
   */
  vertical: Boolean,
  /**
   * @zh 滑块高度，垂直模式必填
   * @en slider height, required in vertical mode
   */
  height: String,
  /**
   * @zh 输入时的去抖延迟，毫秒，仅在 show-input 等于 true 时有效
   * @en debounce delay when typing, in milliseconds, works when `show-input` is true
   * @default 300
   */
  debounce: {
    type: Number,
    default: 300
  },
  /**
   * @zh 屏幕阅读器标签
   * @en label for screen reader
   */
  label: {
    type: String,
    default: void 0
  },
  /**
   * @zh 当 range 为true时，屏幕阅读器标签开始的标记
   * @en when `range` is true, screen reader label for the start of the range
   */
  rangeStartLabel: {
    type: String,
    default: void 0
  },
  /**
   * @zh 当 range 为true时，屏幕阅读器标签结尾的标记
   * @en when `range` is true, screen reader label for the end of the range
   */
  rangeEndLabel: {
    type: String,
    default: void 0
  },
  /**
   * @zh 显示屏幕阅读器的 aria-valuenow 属性的格式
   * @en format to display the `aria-valuenow` attribute for screen readers
   */
  formatValueText: {
    type: e(Function),
    default: void 0
  },
  /**
   * @zh tooltip 的自定义类名
   * @en custom class name for the tooltip
   */
  tooltipClass: {
    type: String,
    default: void 0
  },
  /**
   * @zh Tooltip 出现的位置
   * @en position of Tooltip
   * @values 'top','tl','tr','bottom','bl','br','left','lt','lb','right','rt','rb'
   */
  placement: {
    type: String,
    values: a,
    default: "top"
  },
  /**
   * @zh 标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式
   * @en marks, type of key must be `number` and must in closed interval `[min, max]`, each mark can custom style
   */
  marks: {
    type: e(Object)
  },
  /**
   * @zh 输入时是否触发表单的校验
   * @en whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: !0
  }
});
export {
  d as sliderProps
};