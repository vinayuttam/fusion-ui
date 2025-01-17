/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FuiButton {
        "block": boolean;
        "danger": boolean;
        "size": 'large' | 'middle' | 'small';
        "type": 'primary' | 'default' | 'dashed' | 'text' | 'link';
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
export interface FuiSegmentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFuiSegmentElement;
}
declare global {
    interface HTMLFuiButtonElement extends Components.FuiButton, HTMLStencilElement {
    }
    var HTMLFuiButtonElement: {
        prototype: HTMLFuiButtonElement;
        new (): HTMLFuiButtonElement;
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
    interface HTMLFuiTypographyElement extends Components.FuiTypography, HTMLStencilElement {
    }
    var HTMLFuiTypographyElement: {
        prototype: HTMLFuiTypographyElement;
        new (): HTMLFuiTypographyElement;
    };
    interface HTMLElementTagNameMap {
        "fui-button": HTMLFuiButtonElement;
        "fui-flex": HTMLFuiFlexElement;
        "fui-heading": HTMLFuiHeadingElement;
        "fui-segment": HTMLFuiSegmentElement;
        "fui-segment-option": HTMLFuiSegmentOptionElement;
        "fui-typography": HTMLFuiTypographyElement;
    }
}
declare namespace LocalJSX {
    interface FuiButton {
        "block"?: boolean;
        "danger"?: boolean;
        "size"?: 'large' | 'middle' | 'small';
        "type"?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
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
        "fui-button": FuiButton;
        "fui-flex": FuiFlex;
        "fui-heading": FuiHeading;
        "fui-segment": FuiSegment;
        "fui-segment-option": FuiSegmentOption;
        "fui-typography": FuiTypography;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fui-button": LocalJSX.FuiButton & JSXBase.HTMLAttributes<HTMLFuiButtonElement>;
            "fui-flex": LocalJSX.FuiFlex & JSXBase.HTMLAttributes<HTMLFuiFlexElement>;
            "fui-heading": LocalJSX.FuiHeading & JSXBase.HTMLAttributes<HTMLFuiHeadingElement>;
            "fui-segment": LocalJSX.FuiSegment & JSXBase.HTMLAttributes<HTMLFuiSegmentElement>;
            "fui-segment-option": LocalJSX.FuiSegmentOption & JSXBase.HTMLAttributes<HTMLFuiSegmentOptionElement>;
            "fui-typography": LocalJSX.FuiTypography & JSXBase.HTMLAttributes<HTMLFuiTypographyElement>;
        }
    }
}
