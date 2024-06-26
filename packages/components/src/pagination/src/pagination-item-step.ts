import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const paginationItemStepProps = buildProps({
  pages: {
    type: Number,
    required: true
  },
  current: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  simple: {
    type: Boolean,
    default: false
  }
} as const);

export const paginationItemStepEmits = ['click'];

export type PaginationItemStepProps = ExtractPropTypes<
  typeof paginationItemStepProps
>;
