import type { ExtractPropTypes, PropType } from 'vue';
export declare const timelineProps: {
    reverse: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
    mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "alternate") | (() => "bottom" | "left" | "right" | "top" | "alternate") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "alternate") | (() => "bottom" | "left" | "right" | "top" | "alternate"))[], unknown, unknown, string, boolean>;
    pending: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "relative" | "same") | (() => "relative" | "same") | ((new (...args: any[]) => "relative" | "same") | (() => "relative" | "same"))[], unknown, unknown, string, boolean>;
};
export type TimelineProps = ExtractPropTypes<typeof timelineProps>;
