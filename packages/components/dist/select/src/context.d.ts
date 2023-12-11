import type { InjectionKey } from 'vue';
import type { FilterOption, SelectOptionInfo } from './interface';
export interface SelectContext {
    selectSize?: string;
    multiple?: boolean;
    valueKey?: string;
    inputValue?: string;
    filterOption?: FilterOption;
    component?: string;
    valueKeys: string[];
    activeKey: string | undefined;
    onSelect: (key: string, ev: Event) => void;
    setActiveKey: (key?: string) => void;
    getNextSlotOptionIndex: () => number;
    addSlotOptionInfo: (id: number, optionInfo: SelectOptionInfo) => void;
    removeSlotOptionInfo: (id: number) => void;
}
export declare const selectInjectionKey: InjectionKey<SelectContext>;