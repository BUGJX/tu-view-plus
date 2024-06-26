import type { ExtractPropTypes } from 'vue';
import type { CollapseActiveName } from './collapse';
export declare const collapseItemProps: {
    readonly title: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly extra: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => CollapseActiveName))[], unknown, unknown, () => number, boolean>;
    readonly disabled: BooleanConstructor;
};
export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>;
