import type { ExtractPropTypes, PropType } from 'vue';
import type { Arrayable } from '@tu-view-plus/utils';
export type CollapseActiveName = string | number;
export type CollapseModelValue = Arrayable<CollapseActiveName>;
export declare const collapseProps: {
    readonly accordion: BooleanConstructor;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | CollapseActiveName[]) | (() => CollapseModelValue) | ((new (...args: any[]) => string | number | CollapseActiveName[]) | (() => CollapseModelValue))[], unknown, unknown, () => [], boolean>;
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "bordered" | "outlined") | ((new (...args: any[]) => "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "bordered" | "outlined"))[], "flat" | "inset" | "outset" | "bordered" | "outlined", unknown, "outset", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
};
export declare const collapseEmits: {
    "update:modelValue": (value: CollapseModelValue) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    change: (value: CollapseModelValue) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
};
export type CollapseProps = ExtractPropTypes<typeof collapseProps>;
export type CollapseEmits = typeof collapseEmits;
