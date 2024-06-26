import { messageTypes } from './constants';
import type { AppContext, ExtractPropTypes, VNode } from 'vue';
import type { Mutable } from '@tu-view-plus/utils';
export declare const messageDefaults: Mutable<{
    readonly customClass: "";
    readonly center: false;
    readonly dangerouslyUseHTMLString: false;
    readonly duration: 3000;
    readonly icon: undefined;
    readonly id: "";
    readonly message: "";
    readonly onClose: undefined;
    readonly showClose: false;
    readonly type: "";
    readonly offset: 16;
    readonly zIndex: 0;
    readonly grouping: false;
    readonly repeatNum: 1;
    readonly appendTo: HTMLElement;
}>;
export declare const messageProps: {
    readonly customClass: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly center: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly dangerouslyUseHTMLString: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly duration: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 3000, boolean>;
    readonly icon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown, undefined, boolean>;
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly message: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | (() => VNode)) | (() => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | (() => VNode)) | ((new (...args: any[]) => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | (() => VNode)) | (() => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | (() => VNode)))[], unknown, unknown, "", boolean>;
    readonly onClose: {
        readonly type: import("vue").PropType<() => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "error" | "success" | "warning" | "info", unknown, "", boolean>;
    readonly offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 16, boolean>;
    readonly zIndex: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly grouping: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly repeatNum: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
};
export declare const messageEmits: {
    destroy: () => boolean;
};
export type MessageEmits = typeof messageEmits;
export type MessageProps = ExtractPropTypes<typeof messageProps>;
export type messageType = (typeof messageTypes)[number];
export type MessageOptions = Partial<Mutable<Omit<MessageProps, 'id'> & {
    appendTo?: HTMLElement | string;
}>>;
export type MessageParams = MessageOptions | MessageOptions['message'];
export type MessageParamsNormalized = Omit<MessageProps, 'id'> & {
    appendTo: HTMLElement;
};
export interface MessageHandler {
    close: () => void;
}
export interface MessageConfigContext {
    max?: number;
}
export type MessageFn = {
    (options?: MessageParams, appContext?: null | AppContext): MessageHandler;
    closeAll(type?: messageType): void;
};
export type MessageOptionsWithType = Omit<MessageOptions, 'type'>;
export type MessageParamsWithType = MessageOptionsWithType | MessageOptions['message'];
export type MessageTypedFn = (options?: MessageParamsWithType, appContext?: null | AppContext) => MessageHandler;
export interface Message extends MessageFn {
    success: MessageTypedFn;
    warning: MessageTypedFn;
    info: MessageTypedFn;
    error: MessageTypedFn;
}
