import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const transitionProps = buildProps({
  /**
   * @zh 动画名称
   * @en transition name
   */
  name: String
});

export type TransitionProps = ExtractPropTypes<typeof transitionProps>;
