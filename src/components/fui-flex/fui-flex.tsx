import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'fui-flex',
  styleUrl: 'fui-flex.css',
  shadow: true,
})
export class FUIFlex {
  @Element() el: HTMLElement;

  @Prop() vertical: boolean = false;
  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Prop({ mutable: true }) wrap: boolean | 'nowrap' | 'wrap' | 'wrap-reverse' = 'nowrap';
  @Prop() justify: 'normal' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'left' | 'right' = 'normal';
  @Prop() align: 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'baseline' = 'normal';
  @Prop() flex: string = 'normal';
  @Prop({ mutable: true }) gap: 'small' | 'middle' | 'large' | string | number | [string, string];
  @Prop() component: string = 'div';

  private getDirection(): 'row' | 'column' {
    // Match Ant Design: orientation takes priority over vertical
    if (this.orientation === 'vertical') return 'column';
    if (this.orientation === 'horizontal') return 'row';
    if (this.vertical) return 'column';
    return 'row';
  }

  private getAlignDefault(): string {
    // Match Ant Design exactly: horizontal→flex-start, vertical→stretch
    const direction = this.getDirection();
    if (this.align && this.align !== 'normal') {
      return this.align;
    }
    return direction === 'column' ? 'stretch' : 'flex-start';
  }

  private getGapValue(): { gap?: string; rowGap?: string; columnGap?: string } {
    if (Array.isArray(this.gap)) {
      const [rowGap, columnGap] = this.gap;
      const result: { rowGap?: string; columnGap?: string } = {};
      if (rowGap) {
        result.rowGap = this.convertGapValue(rowGap);
      }
      if (columnGap) {
        result.columnGap = this.convertGapValue(columnGap);
      }
      return result;
    }

    const gap = this.convertGapValue(this.gap);
    return gap ? { gap } : {};
  }

  private convertGapValue(gap: string | number | undefined): string | undefined {
    if (gap === undefined) return undefined;
    if (typeof gap === 'string') {
      if (gap === 'small') return '6px';
      if (gap === 'middle') return '12px';
      if (gap === 'large') return '24px';
      return gap;
    }
    if (typeof gap === 'number') {
      return `${gap}px`;
    }
    return undefined;
  }

  private getStyles(): Record<string, string> {
    const styles: Record<string, string> = {
      display: 'flex',
      flexDirection: this.getDirection(),
    };

    // Apply align items following Ant Design behavior
    styles.alignItems = this.getAlignDefault();

    // Handle wrap property
    if (this.wrap === true || this.wrap === 'wrap') {
      styles.flexWrap = 'wrap';
    } else if (this.wrap === 'wrap-reverse') {
      styles.flexWrap = 'wrap-reverse';
    }
    // Note: 'nowrap' is default, so we don't set it explicitly

    if (this.justify && this.justify !== 'normal') {
      styles.justifyContent = this.justify;
    }

    if (this.flex && this.flex !== 'normal') {
      styles.flex = this.flex;
    }

    // Handle gap (presets, custom, arrays)
    const gapValue = this.getGapValue();
    Object.assign(styles, gapValue);

    return styles;
  }

  render() {
    const style = this.getStyles();
    const Element = this.component || 'div';

    // Generate CSS classes following Ant Design pattern
    const classes = [
      'fui-flex',
      this.el.className,
      this.orientation === 'vertical' || this.vertical ? 'fui-flex-vertical' : '',
      this.wrap === true
        ? 'fui-flex-wrap-wrap'
        : this.wrap === 'wrap-reverse'
          ? `fui-flex-wrap-wrap-reverse`
          : this.wrap && this.wrap !== 'nowrap'
            ? `fui-flex-wrap-${this.wrap}`
            : '',
      this.align && this.align !== 'normal' ? `fui-flex-align-${this.align}` : '',
      this.justify && this.justify !== 'normal' ? `fui-flex-justify-${this.justify}` : '',
      typeof this.gap === 'string' && ['small', 'middle', 'large'].includes(this.gap) ? `fui-flex-gap-${this.gap}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    // Merge inline styles with any user-provided styles
    const mergedStyles = { ...style };
    if (this.el.getAttribute('style')) {
      try {
        const userStyles = this.parseInlineStyles(this.el.getAttribute('style')!);
        Object.assign(mergedStyles, userStyles);
      } catch (e) {
        console.warn('Invalid style attribute provided to fui-flex');
      }
    }

    return (
      <Element style={mergedStyles} class={classes} id={this.el.id}>
        <slot></slot>
      </Element>
    );
  }

  private parseInlineStyles(styleStr: string): Record<string, string> {
    const styles: Record<string, string> = {};
    const declarations = styleStr.split(';');

    for (const declaration of declarations) {
      const colonIndex = declaration.indexOf(':');
      if (colonIndex > 0) {
        const property = declaration.substring(0, colonIndex).trim();
        const value = declaration.substring(colonIndex + 1).trim();
        if (property && value) {
          styles[property] = value;
        }
      }
    }

    return styles;
  }
}
