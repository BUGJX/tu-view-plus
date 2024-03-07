export declare const TuTreeSelect: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly loading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly error: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly border: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly allowSearch: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
            retainInputValue?: boolean | undefined;
        }) | (() => boolean | {
            retainInputValue?: boolean | undefined;
        }) | ((new (...args: any[]) => boolean | {
            retainInputValue?: boolean | undefined;
        }) | (() => boolean | {
            retainInputValue?: boolean | undefined;
        }))[], unknown, unknown, (props: import("@tu-view-plus/utils").Data) => boolean, boolean>;
        readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly placeholder: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly maxTagCount: {
            readonly type: import("vue").PropType<number>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly multiple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly defaultValue: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | ((new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly modelValue: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | ((new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly fieldNames: {
            readonly type: import("vue").PropType<import("../tree/src/interface").TreeFieldNames>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("../tree/src/interface").TreeNodeData[]) | (() => import("../tree/src/interface").TreeNodeData[]) | ((new (...args: any[]) => import("../tree/src/interface").TreeNodeData[]) | (() => import("../tree/src/interface").TreeNodeData[]))[], unknown, unknown, () => never[], boolean>;
        readonly labelInValue: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly treeCheckable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly treeCheckStrictly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly treeCheckedStrategy: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent") | ((new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent"))[], unknown, unknown, "all", boolean>;
        readonly treeProps: {
            readonly type: import("vue").PropType<Partial<import("../tree/src/interface").TreeProps>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly triggerProps: {
            readonly type: import("vue").PropType<Partial<import("../trigger").TriggerProps>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly dropdownStyle: {
            readonly type: import("vue").PropType<import("vue").CSSProperties>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly dropdownClassName: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly filterTreeNode: {
            readonly type: import("vue").PropType<(searchKey: string, nodeData: import("../tree/src/interface").TreeNodeData) => boolean>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly loadMore: {
            readonly type: import("vue").PropType<(nodeData: import("../tree/src/interface").TreeNodeData) => Promise<void>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disableFilter: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly popupContainer: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | (() => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | ((new (...args: any[]) => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | (() => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)))[], unknown, unknown, true, boolean>;
        readonly selectable: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)) | (() => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)) | ((new (...args: any[]) => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)) | (() => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)))[], unknown, unknown, true, boolean>;
        readonly scrollbar: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ({
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tag: string;
            readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import("vue").StyleValue;
            readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly noresize: boolean;
        } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tag: string;
            readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import("vue").StyleValue;
            readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly noresize: boolean;
        } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps))[], unknown, unknown, true, boolean>;
        readonly showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
        readonly showFooterOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
    }>> & {
        onChange?: ((value: string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[] | undefined) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[] | undefined) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onPopup-visible-change"?: ((visible: boolean) => any) | undefined;
        onSearch?: ((searchKey: string) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        search: (searchKey: string) => void;
        clear: () => void;
        change: (value: string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[] | undefined) => void;
        "update:modelValue": (value: string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[] | undefined) => void;
        "update:popupVisible": (visible: boolean) => void;
        "popup-visible-change": (visible: boolean) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly loading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly error: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly border: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly allowSearch: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
            retainInputValue?: boolean | undefined;
        }) | (() => boolean | {
            retainInputValue?: boolean | undefined;
        }) | ((new (...args: any[]) => boolean | {
            retainInputValue?: boolean | undefined;
        }) | (() => boolean | {
            retainInputValue?: boolean | undefined;
        }))[], unknown, unknown, (props: import("@tu-view-plus/utils").Data) => boolean, boolean>;
        readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly placeholder: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly maxTagCount: {
            readonly type: import("vue").PropType<number>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly multiple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly defaultValue: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | ((new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly modelValue: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | ((new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly fieldNames: {
            readonly type: import("vue").PropType<import("../tree/src/interface").TreeFieldNames>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("../tree/src/interface").TreeNodeData[]) | (() => import("../tree/src/interface").TreeNodeData[]) | ((new (...args: any[]) => import("../tree/src/interface").TreeNodeData[]) | (() => import("../tree/src/interface").TreeNodeData[]))[], unknown, unknown, () => never[], boolean>;
        readonly labelInValue: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly treeCheckable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly treeCheckStrictly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly treeCheckedStrategy: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent") | ((new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent"))[], unknown, unknown, "all", boolean>;
        readonly treeProps: {
            readonly type: import("vue").PropType<Partial<import("../tree/src/interface").TreeProps>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly triggerProps: {
            readonly type: import("vue").PropType<Partial<import("../trigger").TriggerProps>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly dropdownStyle: {
            readonly type: import("vue").PropType<import("vue").CSSProperties>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly dropdownClassName: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly filterTreeNode: {
            readonly type: import("vue").PropType<(searchKey: string, nodeData: import("../tree/src/interface").TreeNodeData) => boolean>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly loadMore: {
            readonly type: import("vue").PropType<(nodeData: import("../tree/src/interface").TreeNodeData) => Promise<void>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disableFilter: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly popupContainer: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | (() => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | ((new (...args: any[]) => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | (() => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)))[], unknown, unknown, true, boolean>;
        readonly selectable: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)) | (() => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)) | ((new (...args: any[]) => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)) | (() => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)))[], unknown, unknown, true, boolean>;
        readonly scrollbar: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ({
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tag: string;
            readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import("vue").StyleValue;
            readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly noresize: boolean;
        } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tag: string;
            readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import("vue").StyleValue;
            readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly noresize: boolean;
        } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps))[], unknown, unknown, true, boolean>;
        readonly showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
        readonly showFooterOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
    }>> & {
        onChange?: ((value: string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[] | undefined) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[] | undefined) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onPopup-visible-change"?: ((visible: boolean) => any) | undefined;
        onSearch?: ((searchKey: string) => any) | undefined;
    }, {
        readonly border: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly scrollbar: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ({
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tag: string;
            readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import("vue").StyleValue;
            readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly noresize: boolean;
        } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tag: string;
            readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import("vue").StyleValue;
            readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly noresize: boolean;
        } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps))[], unknown, unknown>;
        readonly multiple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly data: import("../tree/src/interface").TreeNodeData[];
        readonly loading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly allowSearch: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | {
            retainInputValue?: boolean | undefined;
        }) | (() => boolean | {
            retainInputValue?: boolean | undefined;
        }) | ((new (...args: any[]) => boolean | {
            retainInputValue?: boolean | undefined;
        }) | (() => boolean | {
            retainInputValue?: boolean | undefined;
        }))[], unknown, unknown>;
        readonly fallbackOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | (() => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | ((new (...args: any[]) => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | (() => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)))[], unknown, unknown>;
        readonly showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown>;
        readonly showFooterOnEmpty: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown>;
        readonly selectable: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)) | (() => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)) | ((new (...args: any[]) => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)) | (() => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)))[], unknown, unknown>;
        readonly labelInValue: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly treeCheckable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly treeCheckStrictly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly treeCheckedStrategy: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent") | ((new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent"))[], unknown, unknown>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly loading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly error: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly border: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly allowSearch: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
            retainInputValue?: boolean | undefined;
        }) | (() => boolean | {
            retainInputValue?: boolean | undefined;
        }) | ((new (...args: any[]) => boolean | {
            retainInputValue?: boolean | undefined;
        }) | (() => boolean | {
            retainInputValue?: boolean | undefined;
        }))[], unknown, unknown, (props: import("@tu-view-plus/utils").Data) => boolean, boolean>;
        readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly placeholder: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly maxTagCount: {
            readonly type: import("vue").PropType<number>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly multiple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly defaultValue: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | ((new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly modelValue: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | ((new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly fieldNames: {
            readonly type: import("vue").PropType<import("../tree/src/interface").TreeFieldNames>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("../tree/src/interface").TreeNodeData[]) | (() => import("../tree/src/interface").TreeNodeData[]) | ((new (...args: any[]) => import("../tree/src/interface").TreeNodeData[]) | (() => import("../tree/src/interface").TreeNodeData[]))[], unknown, unknown, () => never[], boolean>;
        readonly labelInValue: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly treeCheckable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly treeCheckStrictly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly treeCheckedStrategy: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent") | ((new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent"))[], unknown, unknown, "all", boolean>;
        readonly treeProps: {
            readonly type: import("vue").PropType<Partial<import("../tree/src/interface").TreeProps>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly triggerProps: {
            readonly type: import("vue").PropType<Partial<import("../trigger").TriggerProps>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly dropdownStyle: {
            readonly type: import("vue").PropType<import("vue").CSSProperties>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly dropdownClassName: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly filterTreeNode: {
            readonly type: import("vue").PropType<(searchKey: string, nodeData: import("../tree/src/interface").TreeNodeData) => boolean>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly loadMore: {
            readonly type: import("vue").PropType<(nodeData: import("../tree/src/interface").TreeNodeData) => Promise<void>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disableFilter: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly popupContainer: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | (() => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | ((new (...args: any[]) => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | (() => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)))[], unknown, unknown, true, boolean>;
        readonly selectable: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)) | (() => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)) | ((new (...args: any[]) => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)) | (() => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)))[], unknown, unknown, true, boolean>;
        readonly scrollbar: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ({
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tag: string;
            readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import("vue").StyleValue;
            readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly noresize: boolean;
        } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tag: string;
            readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import("vue").StyleValue;
            readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly noresize: boolean;
        } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps))[], unknown, unknown, true, boolean>;
        readonly showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
        readonly showFooterOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
    }>> & {
        onChange?: ((value: string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[] | undefined) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[] | undefined) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onPopup-visible-change"?: ((visible: boolean) => any) | undefined;
        onSearch?: ((searchKey: string) => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly border: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly scrollbar: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ({
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tag: string;
            readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import("vue").StyleValue;
            readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly noresize: boolean;
        } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tag: string;
            readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import("vue").StyleValue;
            readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly noresize: boolean;
        } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps))[], unknown, unknown>;
        readonly multiple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly data: import("../tree/src/interface").TreeNodeData[];
        readonly loading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly allowSearch: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | {
            retainInputValue?: boolean | undefined;
        }) | (() => boolean | {
            retainInputValue?: boolean | undefined;
        }) | ((new (...args: any[]) => boolean | {
            retainInputValue?: boolean | undefined;
        }) | (() => boolean | {
            retainInputValue?: boolean | undefined;
        }))[], unknown, unknown>;
        readonly fallbackOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | (() => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | ((new (...args: any[]) => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | (() => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)))[], unknown, unknown>;
        readonly showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown>;
        readonly showFooterOnEmpty: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown>;
        readonly selectable: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)) | (() => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)) | ((new (...args: any[]) => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)) | (() => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)))[], unknown, unknown>;
        readonly labelInValue: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly treeCheckable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly treeCheckStrictly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly treeCheckedStrategy: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent") | ((new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent"))[], unknown, unknown>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly loading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly error: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly border: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly allowSearch: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
        retainInputValue?: boolean | undefined;
    }) | (() => boolean | {
        retainInputValue?: boolean | undefined;
    }) | ((new (...args: any[]) => boolean | {
        retainInputValue?: boolean | undefined;
    }) | (() => boolean | {
        retainInputValue?: boolean | undefined;
    }))[], unknown, unknown, (props: import("@tu-view-plus/utils").Data) => boolean, boolean>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly placeholder: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly maxTagCount: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly multiple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly defaultValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | ((new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly modelValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | ((new (...args: any[]) => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]) | (() => string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[]))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly fieldNames: {
        readonly type: import("vue").PropType<import("../tree/src/interface").TreeFieldNames>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("../tree/src/interface").TreeNodeData[]) | (() => import("../tree/src/interface").TreeNodeData[]) | ((new (...args: any[]) => import("../tree/src/interface").TreeNodeData[]) | (() => import("../tree/src/interface").TreeNodeData[]))[], unknown, unknown, () => never[], boolean>;
    readonly labelInValue: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly treeCheckable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly treeCheckStrictly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly treeCheckedStrategy: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent") | ((new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent"))[], unknown, unknown, "all", boolean>;
    readonly treeProps: {
        readonly type: import("vue").PropType<Partial<import("../tree/src/interface").TreeProps>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly triggerProps: {
        readonly type: import("vue").PropType<Partial<import("../trigger").TriggerProps>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly dropdownStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dropdownClassName: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly filterTreeNode: {
        readonly type: import("vue").PropType<(searchKey: string, nodeData: import("../tree/src/interface").TreeNodeData) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly loadMore: {
        readonly type: import("vue").PropType<(nodeData: import("../tree/src/interface").TreeNodeData) => Promise<void>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disableFilter: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | (() => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | ((new (...args: any[]) => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | (() => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)))[], unknown, unknown, true, boolean>;
    readonly selectable: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
        isLeaf: boolean;
        level: number;
    }) => boolean)) | (() => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
        isLeaf: boolean;
        level: number;
    }) => boolean)) | ((new (...args: any[]) => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
        isLeaf: boolean;
        level: number;
    }) => boolean)) | (() => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
        isLeaf: boolean;
        level: number;
    }) => boolean)))[], unknown, unknown, true, boolean>;
    readonly scrollbar: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly tag: string;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly tag: string;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps))[], unknown, unknown, true, boolean>;
    readonly showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
    readonly showFooterOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
}>> & {
    onChange?: ((value: string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[] | undefined) => any) | undefined;
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[] | undefined) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onPopup-visible-change"?: ((visible: boolean) => any) | undefined;
    onSearch?: ((searchKey: string) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    search: (searchKey: string) => void;
    clear: () => void;
    change: (value: string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[] | undefined) => void;
    "update:modelValue": (value: string | number | (string | number)[] | import("./src/interface").LabelValue | import("./src/interface").LabelValue[] | undefined) => void;
    "update:popupVisible": (visible: boolean) => void;
    "popup-visible-change": (visible: boolean) => void;
}, string, {
    readonly border: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly scrollbar: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly tag: string;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly tag: string;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps))[], unknown, unknown>;
    readonly multiple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly data: import("../tree/src/interface").TreeNodeData[];
    readonly loading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly allowSearch: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | {
        retainInputValue?: boolean | undefined;
    }) | (() => boolean | {
        retainInputValue?: boolean | undefined;
    }) | ((new (...args: any[]) => boolean | {
        retainInputValue?: boolean | undefined;
    }) | (() => boolean | {
        retainInputValue?: boolean | undefined;
    }))[], unknown, unknown>;
    readonly fallbackOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | (() => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | ((new (...args: any[]) => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)) | (() => boolean | ((key: string | number) => boolean | import("../tree/src/interface").TreeNodeData)))[], unknown, unknown>;
    readonly showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown>;
    readonly showFooterOnEmpty: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown>;
    readonly selectable: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
        isLeaf: boolean;
        level: number;
    }) => boolean)) | (() => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
        isLeaf: boolean;
        level: number;
    }) => boolean)) | ((new (...args: any[]) => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
        isLeaf: boolean;
        level: number;
    }) => boolean)) | (() => boolean | "leaf" | ((node: import("../tree/src/interface").TreeNodeData, info: {
        isLeaf: boolean;
        level: number;
    }) => boolean)))[], unknown, unknown>;
    readonly labelInValue: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly treeCheckable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly treeCheckStrictly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly treeCheckedStrategy: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent") | ((new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent"))[], unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        trigger?(_: {}): any;
        prefix?(_: {}): any;
        label?(_: any): any;
        header?(_: {}): any;
        loader?(_: {}): any;
        empty?(_: {}): any;
        footer?(_: {}): any;
    };
})> & Record<string, any>;
export default TuTreeSelect;
export * from './src/tree-select';
