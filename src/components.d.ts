/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DateRange {
        "dateFormat": string;
        "disabledDate": (date: Date) => boolean;
        "endDate": Date;
        "startDate": Date;
    }
    interface DateRangePicker {
        "dateFormat": string;
        "disabledDate": (date: Date) => boolean;
    }
    interface FuiButton {
        "block": boolean;
        "danger": boolean;
        "size": 'large' | 'middle' | 'small';
        "type": 'primary' | 'default' | 'dashed' | 'text' | 'link';
    }
    interface FuiCalendarView {
        "date": Date;
        "disabledDate": (date: Date) => boolean;
        "hoverDate": Date;
        "selectedEndDate": Date;
        "selectedStartDate": Date;
    }
    interface FuiFlex {
        "align": 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
        "gap": string | [string, string];
        "justify": 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
        "vertical": boolean;
        "wrap": 'nowrap' | 'wrap' | 'wrap-reverse';
    }
    interface FuiHeading {
        "level": 1 | 2 | 3 | 4 | 5 | 6;
        "type": 'secondary' | 'success' | 'warning' | 'danger';
    }
    interface FuiSegment {
        "block": boolean;
        "disabled": boolean;
        "optionsJson": string;
        "size": 'large' | 'middle' | 'small';
        "value": string;
    }
    interface FuiSegmentOption {
        "disabled": boolean;
        "label": string;
        "value": string;
    }
    interface FuiSelect {
        "disabled": boolean;
        "loading": boolean;
        "multiple": boolean;
        "optionsJson": string;
        "placeholder": string;
        "tags": boolean;
    }
    interface FuiTypography {
        "code": boolean;
        "deleted": boolean;
        "disabled": boolean;
        "italic": boolean;
        "keyboard": boolean;
        "mark": boolean;
        "strong": boolean;
        "type": 'text' | 'secondary' | 'success' | 'warning' | 'danger';
        "underline": boolean;
    }
}
export interface DateRangeCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDateRangeElement;
}
export interface DateRangePickerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDateRangePickerElement;
}
export interface FuiCalendarViewCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFuiCalendarViewElement;
}
export interface FuiSegmentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFuiSegmentElement;
}
export interface FuiSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFuiSelectElement;
}
declare global {
    interface HTMLDateRangeElementEventMap {
        "changeDate": [Date, Date];
    }
    interface HTMLDateRangeElement extends Components.DateRange, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDateRangeElementEventMap>(type: K, listener: (this: HTMLDateRangeElement, ev: DateRangeCustomEvent<HTMLDateRangeElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDateRangeElementEventMap>(type: K, listener: (this: HTMLDateRangeElement, ev: DateRangeCustomEvent<HTMLDateRangeElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDateRangeElement: {
        prototype: HTMLDateRangeElement;
        new (): HTMLDateRangeElement;
    };
    interface HTMLDateRangePickerElementEventMap {
        "changeDate": [Date, Date];
    }
    interface HTMLDateRangePickerElement extends Components.DateRangePicker, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDateRangePickerElementEventMap>(type: K, listener: (this: HTMLDateRangePickerElement, ev: DateRangePickerCustomEvent<HTMLDateRangePickerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDateRangePickerElementEventMap>(type: K, listener: (this: HTMLDateRangePickerElement, ev: DateRangePickerCustomEvent<HTMLDateRangePickerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDateRangePickerElement: {
        prototype: HTMLDateRangePickerElement;
        new (): HTMLDateRangePickerElement;
    };
    interface HTMLFuiButtonElement extends Components.FuiButton, HTMLStencilElement {
    }
    var HTMLFuiButtonElement: {
        prototype: HTMLFuiButtonElement;
        new (): HTMLFuiButtonElement;
    };
    interface HTMLFuiCalendarViewElementEventMap {
        "dateSelect": Date;
        "dateHover": Date;
    }
    interface HTMLFuiCalendarViewElement extends Components.FuiCalendarView, HTMLStencilElement {
        addEventListener<K extends keyof HTMLFuiCalendarViewElementEventMap>(type: K, listener: (this: HTMLFuiCalendarViewElement, ev: FuiCalendarViewCustomEvent<HTMLFuiCalendarViewElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLFuiCalendarViewElementEventMap>(type: K, listener: (this: HTMLFuiCalendarViewElement, ev: FuiCalendarViewCustomEvent<HTMLFuiCalendarViewElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLFuiCalendarViewElement: {
        prototype: HTMLFuiCalendarViewElement;
        new (): HTMLFuiCalendarViewElement;
    };
    interface HTMLFuiFlexElement extends Components.FuiFlex, HTMLStencilElement {
    }
    var HTMLFuiFlexElement: {
        prototype: HTMLFuiFlexElement;
        new (): HTMLFuiFlexElement;
    };
    interface HTMLFuiHeadingElement extends Components.FuiHeading, HTMLStencilElement {
    }
    var HTMLFuiHeadingElement: {
        prototype: HTMLFuiHeadingElement;
        new (): HTMLFuiHeadingElement;
    };
    interface HTMLFuiSegmentElementEventMap {
        "segmentValueChange": string;
    }
    interface HTMLFuiSegmentElement extends Components.FuiSegment, HTMLStencilElement {
        addEventListener<K extends keyof HTMLFuiSegmentElementEventMap>(type: K, listener: (this: HTMLFuiSegmentElement, ev: FuiSegmentCustomEvent<HTMLFuiSegmentElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLFuiSegmentElementEventMap>(type: K, listener: (this: HTMLFuiSegmentElement, ev: FuiSegmentCustomEvent<HTMLFuiSegmentElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLFuiSegmentElement: {
        prototype: HTMLFuiSegmentElement;
        new (): HTMLFuiSegmentElement;
    };
    interface HTMLFuiSegmentOptionElement extends Components.FuiSegmentOption, HTMLStencilElement {
    }
    var HTMLFuiSegmentOptionElement: {
        prototype: HTMLFuiSegmentOptionElement;
        new (): HTMLFuiSegmentOptionElement;
    };
    interface HTMLFuiSelectElementEventMap {
        "change": string | string[];
    }
    interface HTMLFuiSelectElement extends Components.FuiSelect, HTMLStencilElement {
        addEventListener<K extends keyof HTMLFuiSelectElementEventMap>(type: K, listener: (this: HTMLFuiSelectElement, ev: FuiSelectCustomEvent<HTMLFuiSelectElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLFuiSelectElementEventMap>(type: K, listener: (this: HTMLFuiSelectElement, ev: FuiSelectCustomEvent<HTMLFuiSelectElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLFuiSelectElement: {
        prototype: HTMLFuiSelectElement;
        new (): HTMLFuiSelectElement;
    };
    interface HTMLFuiTypographyElement extends Components.FuiTypography, HTMLStencilElement {
    }
    var HTMLFuiTypographyElement: {
        prototype: HTMLFuiTypographyElement;
        new (): HTMLFuiTypographyElement;
    };
    interface HTMLElementTagNameMap {
        "date-range": HTMLDateRangeElement;
        "date-range-picker": HTMLDateRangePickerElement;
        "fui-button": HTMLFuiButtonElement;
        "fui-calendar-view": HTMLFuiCalendarViewElement;
        "fui-flex": HTMLFuiFlexElement;
        "fui-heading": HTMLFuiHeadingElement;
        "fui-segment": HTMLFuiSegmentElement;
        "fui-segment-option": HTMLFuiSegmentOptionElement;
        "fui-select": HTMLFuiSelectElement;
        "fui-typography": HTMLFuiTypographyElement;
    }
}
declare namespace LocalJSX {
    interface DateRange {
        "dateFormat"?: string;
        "disabledDate"?: (date: Date) => boolean;
        "endDate"?: Date;
        "onChangeDate"?: (event: DateRangeCustomEvent<[Date, Date]>) => void;
        "startDate"?: Date;
    }
    interface DateRangePicker {
        "dateFormat"?: string;
        "disabledDate"?: (date: Date) => boolean;
        "onChangeDate"?: (event: DateRangePickerCustomEvent<[Date, Date]>) => void;
    }
    interface FuiButton {
        "block"?: boolean;
        "danger"?: boolean;
        "size"?: 'large' | 'middle' | 'small';
        "type"?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
    }
    interface FuiCalendarView {
        "date"?: Date;
        "disabledDate"?: (date: Date) => boolean;
        "hoverDate"?: Date;
        "onDateHover"?: (event: FuiCalendarViewCustomEvent<Date>) => void;
        "onDateSelect"?: (event: FuiCalendarViewCustomEvent<Date>) => void;
        "selectedEndDate"?: Date;
        "selectedStartDate"?: Date;
    }
    interface FuiFlex {
        "align"?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
        "gap"?: string | [string, string];
        "justify"?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
        "vertical"?: boolean;
        "wrap"?: 'nowrap' | 'wrap' | 'wrap-reverse';
    }
    interface FuiHeading {
        "level"?: 1 | 2 | 3 | 4 | 5 | 6;
        "type"?: 'secondary' | 'success' | 'warning' | 'danger';
    }
    interface FuiSegment {
        "block"?: boolean;
        "disabled"?: boolean;
        "onSegmentValueChange"?: (event: FuiSegmentCustomEvent<string>) => void;
        "optionsJson"?: string;
        "size"?: 'large' | 'middle' | 'small';
        "value"?: string;
    }
    interface FuiSegmentOption {
        "disabled"?: boolean;
        "label"?: string;
        "value"?: string;
    }
    interface FuiSelect {
        "disabled"?: boolean;
        "loading"?: boolean;
        "multiple"?: boolean;
        "onChange"?: (event: FuiSelectCustomEvent<string | string[]>) => void;
        "optionsJson"?: string;
        "placeholder"?: string;
        "tags"?: boolean;
    }
    interface FuiTypography {
        "code"?: boolean;
        "deleted"?: boolean;
        "disabled"?: boolean;
        "italic"?: boolean;
        "keyboard"?: boolean;
        "mark"?: boolean;
        "strong"?: boolean;
        "type"?: 'text' | 'secondary' | 'success' | 'warning' | 'danger';
        "underline"?: boolean;
    }
    interface IntrinsicElements {
        "date-range": DateRange;
        "date-range-picker": DateRangePicker;
        "fui-button": FuiButton;
        "fui-calendar-view": FuiCalendarView;
        "fui-flex": FuiFlex;
        "fui-heading": FuiHeading;
        "fui-segment": FuiSegment;
        "fui-segment-option": FuiSegmentOption;
        "fui-select": FuiSelect;
        "fui-typography": FuiTypography;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "date-range": LocalJSX.DateRange & JSXBase.HTMLAttributes<HTMLDateRangeElement>;
            "date-range-picker": LocalJSX.DateRangePicker & JSXBase.HTMLAttributes<HTMLDateRangePickerElement>;
            "fui-button": LocalJSX.FuiButton & JSXBase.HTMLAttributes<HTMLFuiButtonElement>;
            "fui-calendar-view": LocalJSX.FuiCalendarView & JSXBase.HTMLAttributes<HTMLFuiCalendarViewElement>;
            "fui-flex": LocalJSX.FuiFlex & JSXBase.HTMLAttributes<HTMLFuiFlexElement>;
            "fui-heading": LocalJSX.FuiHeading & JSXBase.HTMLAttributes<HTMLFuiHeadingElement>;
            "fui-segment": LocalJSX.FuiSegment & JSXBase.HTMLAttributes<HTMLFuiSegmentElement>;
            "fui-segment-option": LocalJSX.FuiSegmentOption & JSXBase.HTMLAttributes<HTMLFuiSegmentOptionElement>;
            "fui-select": LocalJSX.FuiSelect & JSXBase.HTMLAttributes<HTMLFuiSelectElement>;
            "fui-typography": LocalJSX.FuiTypography & JSXBase.HTMLAttributes<HTMLFuiTypographyElement>;
        }
    }
}
