import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Spin from './spin.vue';

export const spinProps = buildProps({
  /**
   * @zh 尺寸
   * @en Size
   */
  size: {
    type: Number,
    default: 20
  },

  /**
   * @zh 是否为加载中状态（仅在容器模式下生效）
   * @en Whether it is loading state (Only effective in container mode)
   */
  loading: Boolean,

  /**
   * @zh 是否使用点类型的动画
   * @en Whether to use dot type animation
   */
  dot: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 提示内容
   * @en Prompt content
   */
  tip: String
});

export type SpinProps = ExtractPropTypes<typeof spinProps>;
export type SpinInstance = InstanceType<typeof Spin>;