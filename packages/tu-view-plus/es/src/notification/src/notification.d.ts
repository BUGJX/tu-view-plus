import type { ExtractPropTypes, VNode, PropType } from 'vue';
import type Notification from './notification.vue';
export declare const notificationProps: {
    readonly customClass: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly dangerouslyUseHTMLString: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly duration: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 4500, boolean>;
    readonly icon: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly message: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) & {}) | (() => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) | ((new (...args: any[]) => (string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) & {}) | (() => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>))[], unknown, unknown, "", boolean>;
    readonly offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly onClick: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => () => void) | (() => () => void) | {
        (): () => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => () => void) | (() => () => void) | {
        (): () => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => undefined, boolean>;
    readonly onClose: {
        readonly type: PropType<() => void>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("tl" | "tr" | "bl" | "br") & {}) | (() => "tl" | "tr" | "bl" | "br") | ((new (...args: any[]) => ("tl" | "tr" | "bl" | "br") & {}) | (() => "tl" | "tr" | "bl" | "br"))[], "tl" | "tr" | "bl" | "br", unknown, "tr", boolean>;
    readonly showClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly title: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "error" | "success" | "warning" | "info", unknown, "", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly zIndex: NumberConstructor;
};
export declare const notificationEmits: {
    destroy: () => boolean;
};
export declare type NotificationProps = ExtractPropTypes<typeof notificationProps>;
export declare type NotificationInstance = InstanceType<typeof Notification>;
export declare type NotificationEmits = typeof notificationEmits;
export declare type NotificationOptions = Omit<NotificationProps, 'id'> & {
    appendTo?: HTMLElement | string;
};
export declare type NotificationOptionsTyped = Omit<NotificationOptions, 'type'>;
export interface NotificationHandle {
    close: () => void;
}
export declare type NotificationParams = Partial<NotificationOptions> | string | VNode;
export declare type NotificationParamsTyped = Partial<NotificationOptionsTyped> | string | VNode;
export declare type NotifyFn = ((options?: NotificationParams) => NotificationHandle) & {
    closeAll: () => void;
};
export declare type NotifyTypedFn = (options?: NotificationParamsTyped) => NotificationHandle;
export interface Notify extends NotifyFn {
    success: NotifyTypedFn;
    warning: NotifyTypedFn;
    error: NotifyTypedFn;
    info: NotifyTypedFn;
}
export interface NotificationQueueItem {
    vm: VNode;
}
export declare type NotificationQueue = NotificationQueueItem[];