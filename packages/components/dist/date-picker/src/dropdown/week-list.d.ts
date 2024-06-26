import type { ExtractPropTypes, PropType } from 'vue';
export declare const weekListProps: {
    readonly weekList: {
        readonly type: PropType<number[]>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type WeekListProps = ExtractPropTypes<typeof weekListProps>;
