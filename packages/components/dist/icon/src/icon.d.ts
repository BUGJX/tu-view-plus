import type { ExtractPropTypes } from 'vue';
export declare const iconProps: {
    size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    color: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type IconProps = ExtractPropTypes<typeof iconProps>;
