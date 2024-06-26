import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes, PropType } from 'vue';
import type { RangePanelProps } from './interface';

export const timePickerRangeDropdownProps = buildProps({
  value: {
    type: Array as PropType<RangePanelProps['value']>
  },

  displayIndex: {
    type: Number,
    default: 0
  },

  size: useSizeProp
} as const);

export const timePickerRangeDropdownEmits = [
  'select',
  'confirm',
  'update:displayIndex',
  'display-index-change'
];

export type TimePickerRangeDropdownProps = ExtractPropTypes<
  typeof timePickerRangeDropdownProps
>;
